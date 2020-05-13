import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class AddproductService {

  constructor(private http: HttpClient, private session: SessionStorageService) { }

  createProduct(formData) {
    return new Promise((resolve, reject) => {
      const url = "http://localhost:8085/api/product/addtocart";
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      };
      const body = {
        "pname": formData.pname, 
        "price": formData.price,
        "quantity": formData.quantity,
        "cost": formData.total
      }
      console.log('body', body);
      this.http.post(url, body,httpOptions).subscribe((res: any) => {
          if(res){
            resolve(res);
          }else{
            reject(res);
          }
      });
    });
  }

  getProductById(id) {
    // let id = this.session.retrieve('pid');
    return new Promise((resolve, reject) => {
      const url = "http://localhost:8085/api/productlist/getproduct/"+id;
      //console.log(url);
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      };
      this.http.get(url, httpOptions).subscribe((res: any) => {
        //console.log(res);
          if(res){
            resolve(res);
          }else{
            reject(res);
          }
      });
    });
  }
}
