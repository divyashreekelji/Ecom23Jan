import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductpageComponent } from './components/productpage/productpage.component';
import { ProductpageService } from './services/productpage.service';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { AddcartComponent } from './components/cart/addcart/addcart.component';
import { FillterPipe } from './shared/fillter.pipe';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './components/login/login.component';
import { adminlogin } from './components/adminLogin/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { UpdateAdminComponent } from './components/update-admin/update-admin.component';
import { UsersComponent } from './components/users/users.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ProductpageComponent,
    AddProductComponent,
    AddcartComponent,
    FillterPipe,
    CheckoutComponent,
    RegisterComponent,
    LoginComponent,
    adminlogin,
    AdminComponent,
    UpdateAdminComponent,
    UsersComponent
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[
    [RouterModule]
  ],
  providers: [ProductpageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
