import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PinValidService {

  constructor(private http:HttpClient) { }
  
  
  AllPin(){
    return new Promise((resolve,reject)=>{
      const url="http://localhost:8085/api/reg/register";
      
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
    });
  }


    

   }

  


