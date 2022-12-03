import { Component, OnInit } from '@angular/core';
import { SlidesService } from './slides.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(private slidesService: SlidesService) {
  }

  ngOnInit(): void {
    this.slidesService.getTechList() ;
  }
  title = 'matchDev';
}
