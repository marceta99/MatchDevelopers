import { Component, OnInit } from '@angular/core';
import { SlidesService } from '../slides.service';

@Component({
  selector: 'app-matchess',
  templateUrl: './matchess.component.html',
  styleUrls: ['./matchess.component.scss']
})
export class MatchessComponent implements OnInit {

  matches! : any[] ;

  constructor(private slidesService : SlidesService) {
  }

  ngOnInit(): void {
     this.slidesService.getMatches().subscribe((res : any)=>{
      this.matches = res ;
      console.log(res) ;
    })
  }

}
