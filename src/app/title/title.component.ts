import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
  providers:[ServiceService]
})
export class TitleComponent implements OnInit {

  constructor(public request:ServiceService) { }

      getUsers($key){
        if($key.target.value==''){

        }else{
          this.request.userProfile($key.target.value);
          this.request.userRepo($key.target.value);
        }


        console.log($key.target.value)
      }

  ngOnInit(): void {
  }

}
