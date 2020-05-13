import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class ProductdetailsService {

  constructor(private http: HttpClient) {

  }

  productList() {
    return new Promise((resolve, reject) => {
      const url = "http://localhost:8085/api/productlist/getproductlist";
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      };
      this.http.get(url, httpOptions).subscribe((res: any) => {
        console.log(res);
        if (res.status != 0) {
          resolve(res);
        } else {
          reject(res);
        }
      });
    });
  }

  
} 
