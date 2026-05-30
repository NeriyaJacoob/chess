import { Component, Input, OnInit } from '@angular/core';
import { ApiProductService } from '../../core/services/api-product.service';
import { Product } from '../../models/product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable , Subscriber} from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private apiProductService: ApiProductService, private route: ActivatedRoute) { }
  product: Product | null = null  ;

  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.apiProductService.getProductById(id).subscribe({
        next: (productFromServer) => {
          this.product = productFromServer; 
        },
        error: (err) => {
          console.error('Failed to fetch product', err);
        }
      });
    }
  }

}
