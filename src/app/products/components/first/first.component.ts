import { Component, OnInit } from '@angular/core';


export enum Category {
  Undefined,
  Tech,
  Fiction,
  NonFiction,
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  name: string = "";
  description: string = "";
  price: number = 0;
  category: Category = Category.Undefined;
  isAvailable: boolean = false;
  madeFrom: string[] = [];
  shippingTo: string[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
