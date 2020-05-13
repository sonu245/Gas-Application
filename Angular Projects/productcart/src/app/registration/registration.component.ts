import { Component, OnInit } from '@angular/core';
import { Register } from '../register';
import {Address} from '../address';
import { RegistrationService } from '../registration/registration.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  address : Address=new Address("","","",0);
  register : Register=new Register("",0,"",0,"","",this.address);

  message:any;

  constructor(private service:RegistrationService,private router: Router) { }

  ngOnInit(): void {
  }

  public registerNow(myform){
    let resp=this.service.doRegistration(this.address,this.register);
   console.log(myform.value);
   //this.router.navigate(['/nextpage']);
    resp.subscribe((data)=>this.message=data);
    this.router.navigate(["/register-success"])
    
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
