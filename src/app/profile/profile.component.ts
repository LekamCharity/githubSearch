import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repo } from  '../repo';
import { User } from '../user';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],

})
export class ProfileComponent implements OnInit {
  user:User;
  repo:Repo;
  Users=[]

  constructor(public sec: ServiceService, http: HttpClient ) { }

  
  onSearch(SearchTerm){
    this.sec.userProfile(SearchTerm).then((result)=> {
        this.user = this.sec.user
      },
      (error)=>{console.log(error)}
    );
  }
  ngOnInit(): void {
  }

}
