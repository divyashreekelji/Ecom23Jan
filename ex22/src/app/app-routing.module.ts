import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { NavComponent} from 'src/app/components/nav/nav.component';
import { AddcartComponent } from './components/cart/addcart/addcart.component';
import { ProductpageComponent } from './components/productpage/productpage.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { adminlogin } from './components/adminLogin/login.component';
import { HomeComponent } from './components/home/home.component';
import { UpdateAdminComponent } from './components/update-admin/update-admin.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path:'', redirectTo:'productPage',pathMatch:'full'},
  {path:'productPage',component:ProductpageComponent},
  // {path:'navbar',component:NavComponent},
  {path:'addProduct',component:AddProductComponent},
  {path:'cart',component:AddcartComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path: 'adminLogin', component: adminlogin},
  {path:'admin',component:AdminComponent},
    {path:'updateAdmin',component:UpdateAdminComponent},
    {path:'users',component:UsersComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
