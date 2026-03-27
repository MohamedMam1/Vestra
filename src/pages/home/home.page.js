import { CardComponent } from "../../components/card/card.component.js";

export class HomePage {
  constructor(productService) {
    this.productService = productService;
    this.products = [];
  }

  async loadProducts() {
    this.products = await this.productService.getProducts();
  }

  renderProducts() {
    let output = "";

    for (const product of this.products) {
      const card = new CardComponent(product);

      output += card.render();
    }

    return output;
  }

  async render() {
    await this.loadProducts();
    return `
    <div class="home-container">
      <div class="products-header">
        <h2 class="products-title">Our Products</h2>
      </div>
      <div class="card-items">
        ${this.renderProducts()}
      </div>
    </div>
  `;
  }
}
