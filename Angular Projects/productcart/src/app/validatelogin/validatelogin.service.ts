import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ValidateloginService {

  constructor(private http:HttpClient) { }

  getUser(){
    return new Promise((resolve,reject)=>{
      const url="http://localhost:8085/login"

      const httpOptions={
        headers: new HttpHeaders({
          "Content-Type":"application/json"
        })
      };
      this.http.get(url,httpOptions).subscribe((res:any)=>{
       
        if(res.status!=0){
          resolve(res);
        }
        else{
          reject(res);
        }
      });
    })
  }
}
