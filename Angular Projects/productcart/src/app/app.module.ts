import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CartdetailsComponent } from './cartdetails/cartdetails.component';
import { HttpClientModule  } from '@angular/common/http';
import { AddproductComponent } from './addproduct/addproduct.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { PinValidateComponent } from './pin-validate/pin-validate.component';
import { AlertModule } from 'ngx-alerts'
import { from } from 'rxjs';
import { RegisterSuccessComponent } from './register-success/register-success.component';
import { RegistrationComponent } from './registration/registration.component';
import { ValidateloginComponent } from './validatelogin/validatelogin.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductdetailsComponent,
    CartdetailsComponent,
    AddproductComponent,
    PinValidateComponent,
    RegisterSuccessComponent,
    RegistrationComponent,
    ValidateloginComponent,
    HomeComponent,
    ContactusComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxWebstorageModule.forRoot(),
    AlertModule.forRoot({maxMessages:5, position:'right'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
