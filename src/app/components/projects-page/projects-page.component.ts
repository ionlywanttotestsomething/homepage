import { AfterViewInit, Component } from '@angular/core';
import { GithubClientApiService } from '../../services/github-client-api.service';
import { ProjectData } from '../../models/projectData';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css'],
})
export class ProjectsPageComponent implements AfterViewInit {
  repos: ProjectData[] = [];

  constructor(private githubApi: GithubClientApiService) {}

  ngAfterViewInit() {
    this.githubApi
      .findReposWithPortfolioTag()
      // .then(value => {
      //   let items = value.data.items;
      //   items.filter((repo: any) => {
      //     repo.topics.includes("portfolio-included");
      //     console.log("Owner:" + repo.owner);
      //     console.log("Login:" + repo.owner.login);
      //   });
      //   console.log(items);
      //   return items;
      // });

      .subscribe({
        next: (repos: any[]) => {
          repos.forEach((urls) => {
            console.log(urls);
            this.githubApi.repoDetails(urls).subscribe({
              next: (details: any) => {
                this.repos.push(<ProjectData>{
                  name: details.name,
                  htmlUrl: details.html_url,
                  tags: details.topics,
                  description: details.description,
                });
              },
            });
          });
        },
        error: (err: any) => {
          console.error('Could not fetch details.');
          console.error(err);
        },
      });
  }
}
