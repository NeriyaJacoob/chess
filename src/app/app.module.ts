import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './features/products/products-list/products-list.component';
import { PriceCurrencyPipe } from './shared/pipes/price-currency.pipe';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { OrdersComponent } from './features/orders/orders.component';
import { ProductDetailsComponent } from './features/product-details/product-details.component';
import { LoginComponent } from './features/auth/login/login.component';
import { AddProductComponent } from './features/products/add-product/add-product.component';
import { ProductService } from './core/services/product.service';
import { GuardLogin } from './features/auth/login/guard-login.guard';



@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    PriceCurrencyPipe,
    DashboardComponent,
    OrdersComponent,
    ProductDetailsComponent,
    LoginComponent,
    AddProductComponent,
    
  

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
