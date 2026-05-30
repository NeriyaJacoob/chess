import { Component, OnInit } from '@angular/core';
import { ApiProductService } from '../../../core/services/api-product.service';
import { Product } from 'src/app/models/product.model';
import { FormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']

})
export class AddProductComponent implements OnInit {

  
  constructor(private apiProductService: ApiProductService, private fb: FormBuilder) { }
  addProductForm = this.fb.group({
    id: this.fb.control('', [Validators.required, Validators.min(1)]),
    name: this.fb.control('', [Validators.required]),
    price: this.fb.control('', [Validators.required, Validators.min(0)]),
    category: this.fb.control('', [Validators.required]),
    isAvailable: this.fb.control(false)
  });

  @Output() productAdded = new EventEmitter<Product>();

  addProducts(): void {
    const newProduct: Product = this.addProductForm.value;

    this.apiProductService.addProduct(newProduct).subscribe({
      next: (response) => {
        console.log('Product added successfully', newProduct);
        this.productAdded.emit(newProduct);
        this.addProductForm.reset();
      },
      error: (err)=>{
        console.log("the server is not connecting");
      }
    
      

    });
  }

  ngOnInit(): void {
  }

}
