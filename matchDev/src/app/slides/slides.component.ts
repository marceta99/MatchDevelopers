import { Component, OnInit } from '@angular/core';

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
    info: "cele noci ja na splavu sa njom sam bio",
    tech : [ 1, 2]
  },
  {
    id : 2,
    userName: "djoka",
    name : "djoka",
    surname: "roka",
    img: "https://picsum.photos/200",
    info: "djoka djoka djoka djoka djoka ",
    tech : [ 1, 2]
  },
  {
    id : 3,
    userName: "joca",
    name : "jovan",
    surname: "jovanovic",
    img: "https://picsum.photos/200",
    info: "put do slave i bogatstva put do trona ",
    tech : [ 1, 2]
  },] ;
  usersCount = 0 ;
  currentUser! : any ;

  ngOnInit(): void {
    this.currentUser = this.users[0];
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
