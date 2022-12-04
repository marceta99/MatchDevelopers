import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SlidesService } from '../slides.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router, private slideService : SlidesService) { }

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
    const username = form.controls["username"].value ;
    const password = form.controls["password"].value ;

  this.slideService.login(username);

  this.router.navigate(["/home/slides"]);
  }

}
