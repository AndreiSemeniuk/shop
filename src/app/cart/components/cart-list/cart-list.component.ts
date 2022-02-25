import { Component, OnInit } from '@angular/core';

import { Category } from '../../../products/components/first/first.component';
import { ProductModel } from "../../../products/models/product-model";

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  carts: ProductModel[] = [new ProductModel ("Coca-Cola","Wonderfull drink", 2,Category.NonFiction,
  true,['USA', 'China'], ['Madagascar', 'Italy']),
  new ProductModel ("Lays","Amazing Chips", 1,Category.Fiction,
  true,['Spain'], ['Kazahstan', 'Tundra']),
  new ProductModel ("BMW","Automobile", 10,Category.Tech,
  true,['Germany'], ['Poland', 'Italy','England'])];


  ngOnInit(): void {
  }

  trackByItems(index: number, item: ProductModel): number { return item.price; }
}
