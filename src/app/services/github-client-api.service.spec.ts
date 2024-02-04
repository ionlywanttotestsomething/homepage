import { TestBed } from '@angular/core/testing';

import { GithubClientApiService } from './github-client-api.service';

describe('GithubClientApiService', () => {
  let service: GithubClientApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubClientApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
