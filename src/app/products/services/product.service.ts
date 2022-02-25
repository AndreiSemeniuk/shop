import { Injectable } from '@angular/core';
import { Category } from '../components/first/first.component';
import { ProductModel } from "../models/product-model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: ProductModel[] = [new ProductModel ("Coca-Cola","Wonderfull drink", 2,Category.NonFiction,
  true,['USA', 'China'], ['Madagascar', 'Italy']),
  new ProductModel ("Lays","Amazing Chips", 1,Category.Fiction,
  true,['Spain'], ['Kazahstan', 'Tundra']),
  new ProductModel ("BMW","Automobile", 10,Category.Tech,
  true,['Germany'], ['Poland', 'Italy','England'])];
  
  constructor() { }

  getProducts(){ return this.products}
}
