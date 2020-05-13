import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  newCon(){
    this.router.navigateByUrl('/register');
  }
  refill(){
    this.router.navigateByUrl('/pinvalidate');
  }
  Pro(){
    this.router.navigateByUrl('/validatelogin');
  }
  about(){
    this.router.navigateByUrl('/about');
  }
  contact(){
    this.router.navigateByUrl('/contact');
  }
  

}
