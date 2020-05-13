import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class CartdetailsService {

  constructor(private http: HttpClient) { }

  allProducts() {
    return new Promise((resolve, reject) => {
      const url = "http://localhost:8085/api/product/getproduct";
      // const httpOptions = {
      //   headers: new HttpHeaders({
      //     "Content-Type": "application/json"
      //   })
      // };
      this.http.get(url).subscribe((res: any) => {
        console.log(res);
        if (res) {
          resolve(res);
        } else {
          reject(res);
        }
      });
    });
  }
  
  deleteProduct(id){
    return new Promise((resolve, reject) => {
      const url = "http://localhost:8085/api/product/deleteproid/"+id;
      // const httpOptions = {
      //   headers: new HttpHeaders({
      //     "Content-Type": "application/json"
      //   })
      // };
      this.http.get(url).subscribe((res: any) => {
        //console.log(res);
          if(res.status==200){
            resolve(res);
          }else{
            reject(res);
          }
      });
    });
  }

}



