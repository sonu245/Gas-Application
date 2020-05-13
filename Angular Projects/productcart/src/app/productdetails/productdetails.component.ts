import { Component, OnInit } from '@angular/core';
import { ProductdetailsService } from './productdetails.service';
import { Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  prolist: any;
  constructor(private productdetailsService: ProductdetailsService, private router: Router, private session: SessionStorageService) { }

  ngOnInit(): void {
    this.getProductList();
  }

    getProductList(){
      this.productdetailsService.productList().then((res: any) => {
        //console.log(res);
          this.prolist = res;
      }).catch();
    }

    getId(id) {
      //console.log(id);
      this.router.navigateByUrl('/addproduct');
      this.session.store('pid', id);
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

    



