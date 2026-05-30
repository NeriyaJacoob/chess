import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';

const httpOptions = {
  headers: { 'Content-Type': 'application/json' }
};

@Injectable({ providedIn: 'root' })
export class ApiProductService {
  productsurl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsurl);
  }

  addProduct(product: Product): Observable<any> {
    return this.http.post(this.productsurl, product, httpOptions);
  }
}