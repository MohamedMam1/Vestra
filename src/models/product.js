export class Product {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.price = data.price;
    this.description = data.description;
    this.category = data.category;
    this.image = data.image;
    this.ratingRate = data.rating?.rate ?? 0;
    this.ratingCount = data.rating?.count ?? 0;
  }
}
