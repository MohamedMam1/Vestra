export class DetailsPage {
  constructor(productService) {
    this.productService = productService;
  }

  async render(id) {
    if (!id) {
      return `
          <div class="details-container">
            <div class="error-message">
              <h2>No product selected</h2>
              <p>Please select a product from the home page.</p>
              <a href="/home" class="btn btn-primary">Back to Products</a>
            </div>
          </div>
        `;
    }
    const product = await this.productService.getProduct(id);

    if (!product) {
      return `
          <div class="details-container">
            <div class="error-message">
              <h2>Product not found</h2>
              <p>The product you're looking for doesn't exist.</p>
              <a href="/home" class="btn btn-primary">Back to Products</a>
            </div>
          </div>
        `;
    }

    return `
        <div class="details-container">
          <div class="details-header">
            <a href="/home" class="btn btn-secondary">← Back to Products</a>
          </div>
          
          <div class="product-details">
            <div class="details-image-container">
              <img src="${product.image}" alt="${product.title}" class="details-image">
            </div>
            
            <div class="details-content">
              <div class="details-meta">
                <span class="category-badge">${product.category}</span>
              </div>
              
              <h1 class="details-title">${product.title}</h1>
              
              <div class="rating-section">
                <div class="stars">
                  <span class="star">★</span>
                  <span class="rating-value">${product.ratingRate}</span>
                </div>
                <span class="rating-count">(${product.ratingCount} reviews)</span>
              </div>
              
              <div class="price-section">
                <span class="price">$${product.price}</span>
              </div>
              
              <div class="description-section">
                <h3>Description</h3>
                <p class="description-text">${product.description}</p>
              </div>

            </div>
          </div>
        </div>
      `;
  }
}
