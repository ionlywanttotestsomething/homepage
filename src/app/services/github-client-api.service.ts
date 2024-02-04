import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Octokit } from 'octokit';

@Injectable({
  providedIn: 'root',
})
export class GithubClientApiService {
  private readonly baseUrl = 'https://api.github.com';
  private readonly owner = 'alerGeek';
  private readonly repoOwner = 'alerGeek/homepage';
  private readonly headers = { Accept: 'application/vnd.github+json', 'X-Github-Api-Version': '2022-11-28' };

  private octokit = new Octokit(); // TODO -> auth for Github, as limits are quite small

  constructor(private http: HttpClient) {}

  findReposWithPortfolioTag(): Observable<string[]> {
    const searchUrl = this.baseUrl + '/search/repositories?q=topic:portfolio-included';
    return this.http.get<any>(searchUrl).pipe(
      map((response) => {
        const repos: any = response.items;
        repos.filter((repo: { owner: { login: string } }) => repo.owner.login == this.owner);
        console.log('Found repositories with username and portfolio tag: ' + repos);
        return repos.map((repo: any) => repo.url);
      })
    );
  }

  repoDetails(repoUrl: string): Observable<any> {
    return this.http.get(repoUrl, { headers: this.headers });
  }

  async deploymentDetails(): Promise<any> {
    return await this.octokit.request(
      'GET /repos/' + this.repoOwner + '/deployments?q=&environment=github-pages&sort=created_at&order=desc'
    );
  }
}
