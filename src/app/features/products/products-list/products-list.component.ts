import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent {
  products: Product[] = [
    { id: 1, name: 'Laptop', price: 99.99, icategory: 'electronics', isAvailable: false },
    { id: 2, name: 'T-Shirt', price: 19.99, icategory: 'clothing', isAvailable: true },
    { id: 3, name: 'Sofa', price: 499.99, icategory: 'home', isAvailable: false },
    { id: 4, name: 'Basketball', price: 29.99, icategory: 'sports', isAvailable: true }
  ];


  constructor() { }

  onClick(): void {
    this.products =this.products.filter(product => product.isAvailable);

  }

  ngOnInit(): void {
  }

}
