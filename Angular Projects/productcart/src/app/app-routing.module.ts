import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CartdetailsComponent } from './cartdetails/cartdetails.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { PinValidateComponent } from './pin-validate/pin-validate.component';
import { ValidateloginComponent } from './validatelogin/validatelogin.component';
import { RegisterSuccessComponent } from './register-success/register-success.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactusComponent } from './contactus/contactus.component';
import{ AboutusComponent } from './aboutus/aboutus.component'
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'home', component:HomeComponent },
  { path:'contact', component:ContactusComponent },
  { path:'about', component:AboutusComponent },
  { path:'register',component:RegistrationComponent},
  { path:'validatelogin', component:ValidateloginComponent },
  { path:'register-success', component:RegisterSuccessComponent},
  { path: 'pinvalidate', component: PinValidateComponent },
  { path: 'productdetails', component: ProductdetailsComponent },
  { path: 'cartdetails', component: CartdetailsComponent },
  { path: 'addproduct', component: AddproductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
