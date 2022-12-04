import { Component, OnInit } from '@angular/core';
import { SlidesService } from '../slides.service';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent implements OnInit {


  constructor(private slideService : SlidesService) {

  }

  likes!: any[] ;

  ngOnInit(): void {
    this.slideService.getOnesThatLikedMe().subscribe((res : any)=>{
      this.likes = res ;
      console.log(res) ;
    })
  }
}
