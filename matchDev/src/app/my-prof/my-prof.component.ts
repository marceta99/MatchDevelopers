import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';


@Component({
  selector: 'app-my-prof',
  templateUrl: './my-prof.component.html',
  styleUrls: ['./my-prof.component.scss']
})
export class MyProfComponent {

  constructor( private profileService: ProfileService){}
  isEditing = false;

  public profile = {
    id: 1,
    username: 'mladen.radovic',
    name: 'mladen',
    surname: 'radovic',
    img: "https://www.stockvault.net/data/2009/06/09/109080/preview16.jpg",
    info: "kur mur",
    tech: [1,2]
  }
  onSubmit(f:any){
    this.isEditing = false;
    this.profileService.editUserInfo(this.profile).subscribe()
  }
}
