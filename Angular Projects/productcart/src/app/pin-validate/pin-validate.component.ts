import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import{PinValidService} from './pin-validate.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AlertService } from 'ngx-alerts';
import { from } from 'rxjs';
@Component({
  selector: 'app-pin-validate',
  templateUrl: './pin-validate.component.html',
  styleUrls: ['./pin-validate.component.css']
})
export class PinValidateComponent implements OnInit {
addForm:any;
code: any;
size: number;
copy: any;
pin:any;
count:number;



  constructor(private pinvalidateservice:PinValidService,private router: Router,private alertService: AlertService) { }

  ngOnInit() {
    
    this.addForm = new FormGroup({
      pincode:new FormControl("",Validators.compose([Validators.required,Validators.minLength(5)])),
    });
    this.getAllPin();
    this.doValidate(this.addForm.pincode);
  }

  getAllPin(){
      this.pinvalidateservice.AllPin().then((res: any)=>{
        this.code = res;
        this.count=0;
      }).catch();
   }
   
  doValidate(pin){
      this.getAllPin();
      this.code.forEach((e)=>{
        
        if(e == pin.pincode)
        {
          this.count=1;
          
        }
      });    
        if(this.count == 1)
          //console.log('Authentication Successfull');
          this.router.navigateByUrl('/productdetails');
          else
          //console.log()
          this.alertService.danger('Service is not available for this PinCode');

     
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
