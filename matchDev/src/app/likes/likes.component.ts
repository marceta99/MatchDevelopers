import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent implements OnInit {

  likes: any[] = [{
    id : 1,
    userName: "marceta",
    name : "mihailo",
    surname: "marcetic",
    img: "https://media.cnn.com/api/v1/images/stellar/prod/221122175737-cristiano-ronaldo.jpg?c=original",
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

  ngOnInit(): void {

  }
}
