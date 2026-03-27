export class NotFoundPage {
  async render() {
    return `
      <div class="notfound-container">
        <div class="notfound-content">
          <h1 class="notfound-title">404</h1>
          <p class="notfound-message">Page Not Found</p>
          <p class="notfound-description">The page you're looking for doesn't exist.</p>
          <a href="/home" class="notfound-link">Return to Home</a>
        </div>
      </div>
    `;
  }
}
