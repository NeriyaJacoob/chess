import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardLogin } from './features/auth/login/guard-login.guard'
import { DashboardComponent } from './features/dashboard/dashboard.component'; 
import { ProductsListComponent } from './features/products/products-list/products-list.component';
import {  OrdersComponent } from './features/orders/orders.component';
import { ProductDetailsComponent } from './features/product-details/product-details.component';
import { LoginComponent } from './features/auth/login/login.component';
import { AddProductComponent } from './features/products/add-product/add-product.component';


const routes: Routes = [
  //{path:"",component:DashboardComponent},
  {path:"login",component:LoginComponent},
  {path:"dashboard", component: DashboardComponent,canActivate: [GuardLogin]},
  {path:"products",component:ProductsListComponent,canActivate: [GuardLogin]},
  {path:"products/:id",component:ProductDetailsComponent,canActivate: [GuardLogin]},
  {path:"add-product",component:AddProductComponent,canActivate: [GuardLogin]},
  {path:"orders",component:OrdersComponent ,canActivate: [GuardLogin]},
  {path:"edit/:id",component:AddProductComponent,canActivate: [GuardLogin] },
  {path:"**",redirectTo:"dashboard"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [GuardLogin]
})
export class AppRoutingModule { }
