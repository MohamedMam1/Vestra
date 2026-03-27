import { Product } from "../models/product";

export class ProductService {
  url = "https://fakestoreapi.com/products";

  async getProduct(id) {
    try {
      const res = await fetch(`${this.url}/${id}`);
      const data = (await res.json()) || null;
      return new Product(data);
    } catch (error) {
      console.error("Error fetching product", error);
      return null;
    }
  }

  async getProducts() {
    try {
      const res = await fetch(this.url);
      const data = (await res.json()) || [];
      return data.map((p) => new Product(p));
    } catch (error) {
      console.error("Error fetching products", error);
      return [];
    }
  }
}
