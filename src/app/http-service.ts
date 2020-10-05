import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
 providedIn: 'root'
})
export class HttpService {
 
  repos$ //repos object

  constructor(private http:HttpClient) {
   }

  userRequested(User){

    interface expected{
      avatar_url:any,
      login:string,
      email:string,
      location:string,
      created_at:Date,
      public_repos:number,
      followers:number,
      following:number,
      html_url:string

    }
}
}
