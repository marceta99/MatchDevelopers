import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SlidesService {
  techList! : any[] ;

  constructor(private http : HttpClient) { }

  getTechList(){
    return this.http.get<any[]>("http://192.168.8.156:5050/api/tech/all").subscribe((res : any)=>{
      this.techList = res ;
      console.log(this.techList) ;
    })
  }
}
