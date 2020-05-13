import { Component, OnInit } from '@angular/core';
import { CartdetailsService } from './cartdetails.service';
import{ Router }from '@angular/router';
import { AlertService } from 'ngx-alerts';

import { from } from 'rxjs';

@Component({
  selector: 'app-cartdetails',
  templateUrl: './cartdetails.component.html',
  styleUrls: ['./cartdetails.component.css']
})
export class CartdetailsComponent implements OnInit {
  cartlist: any;
  pid: any;
  constructor(private cartdetailsService: CartdetailsService, private router: Router,private alertService: AlertService) { }

  ngOnInit(): void {
    this.getAllProducts();
    // this.deleteById();
  }

  getAllProducts(){
    this.cartdetailsService.allProducts().then((res: any) => {
      console.log(res);
        this.cartlist = res;
    }).catch();
  }


  deleteById(id){
    this.cartdetailsService.deleteProduct(id).then((res: any) =>{
      this.alertService.warning({html: '<b>This message is bold</b>'});
      // if(res){
      //   this.getAllProducts();
      // }
    }).catch();
  }
  // delete(){
  //   this.router.navigateByUrl('/cartdetails');
  // }
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
