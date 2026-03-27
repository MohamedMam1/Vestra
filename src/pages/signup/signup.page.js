export class SignupPage {
  render() {
    return `
      <div class="signup-container">
        <div class="signup-form">
          <h2>Create Your Account</h2>
          <form id="signupForm" onsubmit="event.preventDefault();">
            <div class="form-group">
              <label for="name">Full Name</label>
              <input type="text" id="name" placeholder="Enter your full name" />
              <span class="error-message" id="nameError"></span>
            </div>
            
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" />
              <span class="error-message" id="emailError"></span>
            </div>

            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" id="password" placeholder="Create a password" />
              <span class="error-message" id="passwordError"></span>
            </div>

            <div class="form-group">
              <label for="confirmPassword">Confirm Password</label>
              <input type="password" id="confirmPassword" placeholder="Confirm your password" />
              <span class="error-message" id="confirmPasswordError"></span>
            </div>

            <button type="button" class="btn btn-primary" onclick="handleSignup()">Sign Up</button>
          </form>
          <p class="login-link">Already have an account? <a href="/login" data-link>Login here</a></p>
        </div>
      </div>
    `;
  }
}
