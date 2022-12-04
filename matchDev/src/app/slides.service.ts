import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlidesService {
  techList! : any[] ;
  loggedUser! : any ;

  constructor(private http : HttpClient) { }

  getTechList(){
    return this.http.get<any[]>("http://192.168.28.68:5050/api/tech/all").subscribe((res : any)=>{
      this.techList = res ;
      console.log(this.techList) ;
    })
  }

  getSlides(){
    return this.http.get<any[]>("http://192.168.28.68:5050/api/slides/"+this.loggedUser.id)
  }
  like(likedUserId : any){
    console.log(this.loggedUser);
    this.http.post("http://192.168.28.68:5050/api/like",
     {from : this.loggedUser.id, to : likedUserId }).subscribe((res: any)=>{
      console.log(res);
     })
  }

  login(name : string ){
     this.http.post("http://192.168.28.68:5050/api/login",
    { username : name, password : "password"} ).subscribe((res : any)=>{
      this.loggedUser = res ;
      console.log(res);
    })

  }

  getMatches(){
    return this.http.get<any[]>("http://192.168.28.68:5050/api/matched/"+this.loggedUser.id)

  }

  getOnesThatLikedMe(){
    return this.http.get<any[]>("http://192.168.28.68:5050/api/likes/"+this.loggedUser.id)
  }
}
