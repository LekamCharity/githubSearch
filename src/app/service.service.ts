import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repo } from './repo';
import { User } from './user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  user: User;
  repo: Repo;
  repos;

  profile = environment.url;

  constructor(private http: HttpClient) {
    this.user = new User('', '', '', '', 0, 0, 0, 0, '')
    this.repo = new Repo(0,'','',0,'','')
  }
  userProfile(num: string) {
    interface expected {
      login: string,
      avatar_url: string,
      email: string,
      location: string,
      memberSince: Number,
      repo_url: any,
      followers: number,
      following: number,
      html_url: string,
    
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<expected>('https://api.github.com/users/' + num + '?access_token=' + this.profile).toPromise().then(data => {

        this.user = new User(
          data.login,
          data.avatar_url,
          data.email,
          data.location,
          data.memberSince,
          data.repo_url,
          data.followers,
          data.following,
          data.html_url
        );
      

        resolve()
      },
        error => {
          console.log(error);

          reject()
        }
      )
    });
    return promise
  }

  userRepo(num: string): any {
    interface expected {
      repo_url:any,
      description: any,
      name:any,
      forks: number,
      language:any,
      html_url:any,
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<expected>('https://api.github.com/users/' + num + '/repos' + '?access_token='+ this.profile).toPromise().then(data => {

        this.repo = new Repo(
          data.repo_url,
          data.description,
          data.name,
          data.forks,
          data.html_url,
          data.language
        );
        this.repos = data;

        resolve()
      },
        error => {
          console.log(error);

          reject()
        });

    });
    return promise;
  }
}
