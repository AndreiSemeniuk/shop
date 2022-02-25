import { Component, OnInit } from '@angular/core';

import { ProductService } from "../../services/product.service";
import { ProductModel } from "../../models/product-model";
import { Category } from '../first/first.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: ProductModel[] = [new ProductModel ("","", 0,Category.Undefined,
  false,['', ''], ['', ''])];

  constructor(private productService: ProductService) { }
  

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
   this.products=this.productService.getProducts();
  }

}
