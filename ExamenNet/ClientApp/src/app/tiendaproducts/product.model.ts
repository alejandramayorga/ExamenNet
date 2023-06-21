
export class ProductItem {
    public id: number;
    public name: string;
    public price: number;
    public imageUrl: string;

  //   public ingredients: Ingredient[];
  
    constructor(id: number, name: string, price: number, imageUrl: string) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.imageUrl = imageUrl;
   
    }
  }