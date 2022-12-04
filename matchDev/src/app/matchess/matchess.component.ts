import { Component, OnInit } from '@angular/core';
import { SlidesService } from '../slides.service';

@Component({
  selector: 'app-matchess',
  templateUrl: './matchess.component.html',
  styleUrls: ['./matchess.component.scss']
})
export class MatchessComponent implements OnInit {

  matches : any[] = [{
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


  constructor(private slidesService : SlidesService) {
  }

  ngOnInit(): void {
     this.slidesService.getMatches().subscribe((res : any)=>{
      this.matches = res ;
      console.log(res) ;
    })
  }

}
