export class LoginPage {
  render() {
    return `
      <div class="login-container">
        <div class="login-form">
          <h2>Login to Your Account</h2>
          <form id="loginForm" onsubmit="event.preventDefault();">
            
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>

            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" id="password" placeholder="Enter your password" />
            </div>

            <span class="error-message" id="loginError"></span>

            <button type="button" class="btn btn-primary" onclick="handleLogin()">
              Login
            </button>
          </form>

          <p class="signup-link">
            Don't have an account? <a href="/signup">Sign up here</a>
          </p>
        </div>
      </div>
    `;
  }
}
