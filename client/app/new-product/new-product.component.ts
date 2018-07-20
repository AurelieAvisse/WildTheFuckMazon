import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  newProduct: Product = new Product();
  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

addProduct() {
  console.log(this.newProduct);
  this.productService.addProduct(this.newProduct)
  .subscribe((product) => {
    console.log(product);
    this.newProduct = new Product();
  });
}



}
