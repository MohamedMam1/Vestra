export class navbarComponent {
  render() {
    return `
      <nav class="navbar">
        <div class="logo">
          <a href="/home">Vestra</a>
        </div>

        <div class="pages">
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>

        <div class="nav-actions">
          <button id="theme-toggle" class="theme-toggle-btn">
            🌙
          </button>

          <div id="login-div" class="auth">
            <ul>
              <li>
                <a href="/login" class="btn btn-secondary">Login</a>
              </li>
              <li>
                <a href="/signup" class="btn btn-primary">Sign Up</a>
              </li>
            </ul>
          </div>
          <div id="logout-div" class="auth">
            <ul>
              <li>
                <a href="/login" id="logoutBtn" class="btn btn-secondary">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;
  }
}
