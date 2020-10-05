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

  profile = environment.url;

  constructor(private http: HttpClient) {
    this.user = new User('', '', '', '', 0, 0, 0, 0, '')
    this.repo = new Repo('', 0, 0)
  }
  userProfile(num: string) {
    interface expected {
      login: string,
      avatar_url: string,
      email: string,
      location: string,
      memberSince: Number,
      repos: number,
      followers: number,
      following: number,
      url: string
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<expected>('https://api.github.com/users/' + num + this.profile).toPromise().then(data => {
        this.user = new User(
          data.login,
          data.avatar_url,
          data.email,
          data.location,
          data.memberSince,
          data.repos,
          data.followers,
          data.following,
          data.url
        );
        console.log(data)

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

  userRepo(num: any) {
    interface expected {
      name: string,
      forks: number,
      watcher: number
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<expected>('https://api.github.com/users/' + num + this.profile).toPromise().then(data => {
        this.repo = new Repo(
          data.name,
          data.forks,
          data.watcher
        );
        console.log(data)
        resolve()
      },
        error => {
          console.log(error);

          reject()
        });
    }
  }
}
