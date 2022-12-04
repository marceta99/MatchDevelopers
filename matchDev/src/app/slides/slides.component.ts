import { Component, OnInit } from '@angular/core';
import { SlidesService } from '../slides.service';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})
export class SlidesComponent implements OnInit {

  users!: any[] ;
  usersCount = 0 ;
  currentUser! : any ;
  listtech! : any[] ;

  constructor(private slidesService : SlidesService) {
  }

  ngOnInit(): void {
    this.currentUser = this.users?.length > 0 ? this.users[0] : null;
    this.slidesService.getSlides().subscribe((res : any)=>{
      console.log(res);
      this.users = res ;
      this.currentUser = this.users[0];
      console.log(this.users);
    })
    this.listtech = this.slidesService.techList ;
  }

  connect(){
    console.log(this.currentUser.id);
    this.slidesService.like(this.currentUser.id);

    this.usersCount++ ;

    if(this.usersCount >= this.users.length){
      this.currentUser = null ;
      return ;
    }
    this.currentUser = this.users[this.usersCount] ;
  }
  next(){
    this.usersCount++ ;
    this.currentUser = this.users[this.usersCount] ;
  }
}
