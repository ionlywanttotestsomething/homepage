import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubClientApiService {
  private readonly baseUrl = 'https://api.github.com';
  private readonly repoOwner = 'alerGeek';
  private readonly headers = {'Accept': 'application/vnd.github+json', 'X-Github-Api-Version': '2022-11-28'};

  constructor(private http: HttpClient) {
  }

  findReposWithPortfolioTag(): Observable<string[]> {
    const searchUrl = `${this.baseUrl}/search/repositories?q=topic:portfolio-included`;
    return this.http.get<any>(searchUrl)
      .pipe(map(response => {
          let repos: any = response.items;
          repos.filter((repo: { owner: { login: string; }; }) => {
            console.log(repo.owner.login)
            console.log(this.repoOwner)
            repo.owner.login == (this.repoOwner)
          })
          console.log('Found repositories with username and portfolio tag: ' + repos)
          return repos.map((repo: any) => repo.url);
        })
      );
  }

  public repoDetails(repoUrl: string): Observable<Object> {
    return this.http.get(repoUrl, {headers: this.headers})
  }
}
