import { Component, Input, OnInit } from '@angular/core';
import { ApiProductService } from '../../../core/services/api-product.service';
import { Product } from '../../../models/product.model';
import { Router } from '@angular/router';
import { Observable , Subscriber} from 'rxjs';



@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit {
  products: Product[] = [];

  constructor(private apiProductService: ApiProductService, private router: Router) { }
  
  onClick(): void {
    this.products =this.products.filter(product => product.isAvailable);

  }
  viewDetails(productId: number): void {
    this.router.navigate(['/products', productId]);

  }



  ngOnInit() {
    this.apiProductService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }
}

