import { Category } from "../components/first/first.component";

export class ProductModel {
  name: string = "";
  description: string = "";
  price: number = 0;
  category: Category = Category.Undefined;
  isAvailable: boolean = false;
  madeFrom: string[] = [];
  shippingTo: string[] = [];
  

  constructor(name: string, description: string,  price: number,  category: Category,  isAvailable: boolean,  madeFrom: string[],  shippingTo: string[]) {
    name = this.name;
    description = this.description;
    price = this.price;
    category = this.category;
    isAvailable = this.isAvailable;
    madeFrom = this.madeFrom;
    shippingTo = this.shippingTo;
  }
}