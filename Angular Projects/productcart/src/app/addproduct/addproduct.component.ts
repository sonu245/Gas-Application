import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AddproductService } from './addproduct.service';
import { SessionStorageService } from 'ngx-webstorage';
import { Router }from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  addform: any;
  totalPrice: any;
  pid: any;
  productName: any;
  productPrice: any;


  constructor(private fb: FormBuilder, private addproductService: AddproductService, private session: SessionStorageService, private router: Router) {
    this.addform = this.fb.group({
      pname: [''],
      price: [''],
      quantity: [''],
      total: ['']
    })
  }

  ngOnInit(): void {
    this.pid = this.session.retrieve('pid');
    this.productById();
  }

  productById() {
    this.pid = this.session.retrieve('pid');
    //console.log(this.pid);
    this.addproductService.getProductById(this.pid).then((res: any) => {
      this.addform.controls.pname.patchValue(res.pname);
      this.addform.controls.price.patchValue(res.pprice);
      //console.log(res);
      this.productName = res.pname;
      this.productPrice = res.pprice;
      // console.log(this.productData.pname);
    }).catch();
  }

  addProduct() {
    this.addproductService.createProduct(this.addform.value).then((res: any) => {
      console.log(this.addform.value);
      this.router.navigateByUrl('/cartdetails');
    }).catch();
  }
  calculatePrice(event) {
    this.totalPrice = (this.productPrice) * (event);
     this.addform.controls.total.patchValue(this.totalPrice);
    // console.log(event);
    // console.log(this.totalPrice);
  }

  newCon(){
    this.router.navigateByUrl('/register');
  }

  Pro(){
    this.router.navigateByUrl('/validatelogin');
  }
  home(){
    this.router.navigateByUrl('/home');
  }
  about(){
    this.router.navigateByUrl('/about');
  }
  contact(){
    this.router.navigateByUrl('/contact');
  }



}
