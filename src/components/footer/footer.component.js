export class footerComponent {
  render() {
    return `
      <footer class="footer">
        <div class="footer-content">
          <div class="footer-section">
            <div class="footer-logo">
              <h3>Vestra</h3>
            </div>
            <p class="footer-description">Modern, minimal, and professional shopping experience.</p>
          </div>
          
          <div class="footer-section">
            <h4 class="footer-title">Quick Links</h4>
            <ul class="footer-links">
              <li><a href="/home">Home</a></li>
              <li><a href="/about">About Us</a></li>
            </ul>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2026 Vestra. All rights reserved.</p>
        </div>
      </footer>
    `;
  }
}
