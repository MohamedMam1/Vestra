function handleSignup() {
  document
    .querySelectorAll(".error-message")
    .forEach((el) => (el.textContent = ""));

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirmPassword").value;

  let isValid = true;

  if (name.length < 2) {
    document.getElementById("nameError").textContent =
      "name must be greater than 3 chars";
    isValid = false;
  }

  if (!email.includes("@") || !email.includes(".")) {
    document.getElementById("emailError").textContent = "Invalid email fromat";
    isValid = false;
  }

  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Min 6 chars";
    isValid = false;
  }

  if (password !== confirm) {
    document.getElementById("confirmPasswordError").textContent =
      "password not match";
    isValid = false;
  }

  if (isValid) {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.some((u) => u.email === email)) {
      document.getElementById("emailError").textContent =
        "Email already exists";
      return;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Account Created Sucessfuly!");
    window.location.href = "/login";
  }
}
function handleLogin() {
  const errorEl = document.getElementById("loginError");
  errorEl.textContent = "";
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  if (!email || !password) {
    errorEl.innerHTML = "Invalid email or password";
  }

  const users = JSON.parse(localStorage.getItem("users") || "[]");

  const foundUser = users.find(
    (u) => u.email === email && u.password === password,
  );

  if (foundUser) {
    setCookie("isLoggedIn", "true", 1);
    window.location.href = "/home";
  } else {
    errorEl.innerHTML = "Invalid email or password";
  }
}
function setCookie(cookiename, cookieval, expdays) {
  if (expdays) {
    var date = new Date();
    date.setTime(date.getTime() + expdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + date.toUTCString();
    document.cookie =
      encodeURIComponent(cookiename) + //~ method encodes special characters including: , / ? : @ & = + $ #
      "=" +
      encodeURIComponent(cookieval) +
      ";" +
      expires; //persistant cookie
  } else {
    document.cookie =
      encodeURIComponent(cookiename) + "=" + encodeURIComponent(cookieval); //session cookie
  }
}
