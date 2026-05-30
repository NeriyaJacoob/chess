import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ApiProductService } from '../../core/services/api-product.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Product[] = [];

  constructor(private apiProductService: ApiProductService) { }

  ngOnInit(): void {
    this.apiProductService.getProducts().subscribe((data: Product[]) => {
      this.orders = data;
    });
  }

  getTotal(): number {
    return this.orders.reduce((total, product) => total + product.price, 0);
  }

}
