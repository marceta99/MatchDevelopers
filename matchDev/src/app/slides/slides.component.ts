import { Component, OnInit } from '@angular/core';
import { SlidesService } from '../slides.service';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})
export class SlidesComponent implements OnInit {

  users: any[] = [{
    id : 1,
    userName: "marceta",
    name : "mihailo",
    surname: "marcetic",
    img: "https://picsum.photos/200",
    info: "Ne budite mene, mamuran sam ja od rakije ljute i od splavova ne budite mene, mamuran sam ja ni majka me jutros nije poznala",
    tech : [ 1, 2],
    linkedin :""
  },
  {
    id : 2,
    userName: "djoka",
    name : "djoka",
    surname: "roka",
    img: "https://picsum.photos/200",
    info: "djoka djoka djoka djoka djoka ",
    tech : [ 1, 2],
    linkedin :""
  },
  {
    id : 3,
    userName: "joca",
    name : "jovan",
    surname: "jovanovic",
    img: "https://picsum.photos/200",
    info: "put do slave i bogatstva put do trona ",
    tech : [ 1, 2],
    linkedin :""
  },] ;
  usersCount = 0 ;
  currentUser! : any ;


  constructor(private slidesService : SlidesService) {
  }

  ngOnInit(): void {
    this.currentUser = this.users[0];
    this.slidesService.getSlides().subscribe((res : any)=>{
      console.log(res);
    })
  }

  connect(){
    this.usersCount++ ;
    this.currentUser = this.users[this.usersCount] ;
  }
  next(){
    this.usersCount++ ;
    this.currentUser = this.users[this.usersCount] ;
  }
}
