import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { NgForm } from '@angular/forms';
import { SlidesService } from '../slides.service';


@Component({
  selector: 'app-my-prof',
  templateUrl: './my-prof.component.html',
  styleUrls: ['./my-prof.component.scss']
})
export class MyProfComponent implements OnInit {

  techList! : any ;
  selectedList!: any;
  constructor( private profileService: ProfileService, private slidesService:SlidesService){}
  ngOnInit() {
    this.techList = this.slidesService.techList ; 
    console.log(this.techList);
    console.log(this.slidesService.techList);
  }
  isEditing = false;
  selectOpt : any = [];
  selected! : any ;

  public profile = {
    id: 1,
    username: 'mladen.radojevic',
    name: 'mladen',
    surname: 'radojevic',
    img: "https://www.stockvault.net/data/2009/06/09/109080/preview16.jpg",
    info: "opis o profilu",
    tech: [1,2]
  }
  onSubmit(form : NgForm){
    this.isEditing = false;
    const user = {
          id: this.profile.id,
          username: this.profile.username,
          name: form.controls['name'].value,
          surname: form.controls['surname'].value,
          img: "https://www.stockvault.net/data/2009/06/09/109080/preview16.jpg",
          info: form.controls['info'].value,
          tech: this.selectOpt
    }
    console.log(user)
    this.profileService.editUserInfo(user).subscribe()
  }
  selectedOption(form : NgForm){
    const select = form.controls['state']
    this.selectOpt.push(select)
    console.log(select)
    console.log(form.controls['state'])
    console.log(this.selectOpt)
    
  }
}
