import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './features/products/products-list/products-list.component';
import { PriceCurrencyPipe } from './shared/pipes/price-currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    PriceCurrencyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
