import { Component, OnInit } from '@angular/core';
import { GithubClientApiService } from '../../../services/github-client-api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  deploySha: string = '';
  deployDate: string = '';

  constructor(private githubApi: GithubClientApiService) {}

  ngOnInit() {
    this.githubApi
      .deploymentDetails()
      .then((value) => {
        this.deploySha = value.data.at(0).sha;
        this.deployDate = new Date(value.data.at(0).created_at).toLocaleDateString();
        console.log('SHA' + this.deploySha);
        console.log('Deployed' + this.deployDate);
      })
      .catch((reason) => console.error(reason));
  }
}
