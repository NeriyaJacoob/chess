import { Component, OnInit } from '@angular/core';
import { ApiProductService } from '../../../core/services/api-product.service';
import { Product } from 'src/app/models/product.model';
import { FormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']

})
export class AddProductComponent implements OnInit {
isEditing: boolean = false;
  
  constructor(private apiProductService: ApiProductService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }
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

  onSubmit(): void {
    const productData = this.addProductForm.value;

    if (this.isEditing) {
      this.apiProductService.updateProduct(productData.id, productData).subscribe({
        next: () => {
          this.router.navigate(['/products']); 
        },
        error: (err) => console.error('Error updating product', err)
      });
    } else {
      this.apiProductService.addProduct(productData).subscribe({
        next: () => {
          this.addProductForm.reset();
        },
        error: (err) => console.error('Error adding product', err)
      });
    }
  }

ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditing = true; 
      this.apiProductService.getProductById(id).subscribe({
        next: (productFromServer) => {
          this.addProductForm.patchValue(productFromServer);
        },
        error: (err) => console.error('Failed to load product for editing', err)
      });
    }
  }

}
