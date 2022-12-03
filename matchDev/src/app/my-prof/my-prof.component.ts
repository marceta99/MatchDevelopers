import { Component } from '@angular/core';


@Component({
  selector: 'app-my-prof',
  templateUrl: './my-prof.component.html',
  styleUrls: ['./my-prof.component.scss']
})
export class MyProfComponent {

  

  public profile = {
    id: 1,
    username: 'mladen.radovic',
    name: 'mladen',
    surname: 'radovic',
    img: "https://www.stockvault.net/data/2009/06/09/109080/preview16.jpg",
    info: "kur mur"

  }
}
