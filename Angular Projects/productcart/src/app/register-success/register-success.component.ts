import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register-success',
  templateUrl: './register-success.component.html',
  styleUrls: ['./register-success.component.css']
})
export class RegisterSuccessComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onButtonClick():void{
    this.router.navigate(["/validatelogin"])
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
