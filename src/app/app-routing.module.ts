import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ProductsListComponent } from './features/products/products-list/products-list.component';
import {  OrdersComponent } from './features/orders/orders.component';
import { ProductDetailsComponent } from './features/product-details/product-details.component';
import { LoginComponent } from './features/auth/login/login.component';
import { AddProductComponent } from './features/products/add-product/add-product.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"products",component:ProductsListComponent},
  {path:"products/:id",component:ProductDetailsComponent},
  {path:"add-product",component:AddProductComponent},
  {path:"orders",component:OrdersComponent},
  {path:"login",component:LoginComponent},
  {path:"**",redirectTo:"products"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
