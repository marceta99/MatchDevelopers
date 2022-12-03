import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SlidesService {
  techList! : any[] ;

  constructor(private http : HttpClient) { }

  getTechList(){
    return this.http.get<any[]>("http://192.168.28.68:5050/api/tech/all").subscribe((res : any)=>{
      this.techList = res ;
      console.log(this.techList) ;
    })
  }

  getSlides(){
    return this.http.get<any[]>("http://192.168.28.68:5050/api/slides/1")
  }
}
