export class CardComponent {
  constructor(product) {
    this.product = product;
  }

  render() {
    return `
      <div class="card">
        <div class="card-image">
          <img src="${this.product.image}" alt="${this.product.title}">
        </div>

        <div class="card-content">
          <h3 class="card-title">${this.product.title}</h3>

          <div class="card-info">
          <span class="price">$${this.product.price}</span>
          <span class="category">${this.product.category}</span>
          <div class="rating">
            <span class="star">★</span>
            <span class="rate-value">${this.product.ratingRate}</span>
            <span class="rate-count">(${this.product.ratingCount})</span>
          </div>
        </div>
         <div class="card-footer">
          <button class="btn btn-primary" data-id="${this.product.id}" onclick="viewProduct(${this.product.id})">
            Read more
          </button>
        </div>
        </div>
      </div>
    `;
  }
}
