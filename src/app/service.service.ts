import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repo } from './repo';
import { User } from './user';
import { environment } from 'src/environments/environment';
import { allowedNodeEnvironmentFlags } from 'process';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  user: User;
  repo: Repo;
  
  profile = environment.url;

  constructor(private http:HttpClient) { 
    this.user = new User('', '', '','', 0, 0, 0, 0, '')
    this.repo = new Repo( '', 0, 0)
  }
}
