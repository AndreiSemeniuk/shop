import { Category } from "../components/first/first.component";

export class ProductModel {
  constructor(
    public name: string = '',
    public description: string = '',
    public price: number = 0,
    public category: Category = Category.Undefined,
    public isAvailable: boolean = false,
    public madeFrom: string[] = [],
    public shippingTo: string[] = []
  ) {}
}
