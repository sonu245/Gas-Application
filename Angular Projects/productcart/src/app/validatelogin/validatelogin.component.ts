import { Component,OnInit} from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {ValidateloginService} from './validatelogin.service';
import {AlertService} from 'ngx-alerts';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-validatelogin',
  templateUrl: 'validatelogin.component.html',
  styleUrls: ['validatelogin.component.css']
})
export class ValidateloginComponent  implements OnInit{
  form:any;
  uname:string;
  pass:string;
  code:any;
  count:number;
constructor(private validateloginservice:ValidateloginService, private router: Router,private alertService: AlertService){}
    ngOnInit(){
        this.form=new FormGroup({
            userName:new FormControl(""),//Validators.compose([Validators.required,Validators.minLength(3)])),
            password:new FormControl("")
           
        });
        this.getUserDetails();
    
    }

    getUserDetails(){
      this.validateloginservice.getUser().then((res:any)=>{
        this.code=res;
        this.count=0;
        
      }).catch();
    }

        onSubmit(uname,pass)
        {
          
          this.getUserDetails();
          this.code.forEach((e)=> {
          if(e.cname==uname.userName&& e.cpassword==pass.password)
            {
            this.count=1;
             } 
          
          });
          if(this.count==1)
          {
            this.router.navigateByUrl('/pinvalidate');
            
          }
          else
          //console.log("fail");
          this.alertService.danger('credencials incorrect');

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