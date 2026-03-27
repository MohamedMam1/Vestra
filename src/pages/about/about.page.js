export class AboutPage {
  async render() {
    return `
      <div class="about-container">
        <div class="about-content">
          <h1 class="about-title">About Us</h1>
          
          <div class="about-section">
            <h2 class="about-heading">Who We Are</h2>
            <p class="about-text">
              Welcome to MyApp, your trusted destination for quality products and seamless shopping experience. 
              We are committed to bringing you the finest selection of items, curated with care and delivered with excellence.
            </p>
          </div>
          
          <div class="about-section">
            <h2 class="about-heading">Our Mission</h2>
            <p class="about-text">
              Our mission is to provide a clean, minimal, and professional shopping platform that makes 
              discovering and purchasing quality products effortless. We believe in transparency, 
              quality, and customer satisfaction above all else.
            </p>
          </div>
    `;
  }
}
