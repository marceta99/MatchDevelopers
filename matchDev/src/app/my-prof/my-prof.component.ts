import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-my-prof',
  templateUrl: './my-prof.component.html',
  styleUrls: ['./my-prof.component.scss']
})
export class MyProfComponent {

  constructor( private profileService: ProfileService){}
  isEditing = false;
  selectOptions : any = [];

  public profile = {
    id: 1,
    username: 'mladen.radovic',
    name: 'mladen',
    surname: 'radovic',
    img: "https://www.stockvault.net/data/2009/06/09/109080/preview16.jpg",
    info: "kur mur",
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
          tech: [1,2]
    }
    console.log(user)
    this.profileService.editUserInfo(user).subscribe()
  }
  selectedOption(form : NgForm){
    const select = form.controls['state'].value
    this.selectOptions.push(this.selectOptions)
    console.log(select)
    console.log(this.selectOptions)
  }
}
