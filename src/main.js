import { Router } from "./router";
import { HomePage } from "./pages/home/home.page.js";
import { AboutPage } from "./pages/about/about.page.js";
import { DetailsPage } from "./pages/details/details.page.js";
import { LoginPage } from "./pages/login/login.page.js";
import { SignupPage } from "./pages/signup/signup.page.js";
import { NotFoundPage } from "./pages/notfound/notfound.page.js";
import { navbarComponent } from "./components/navbar/navbar.component.js";
import { footerComponent } from "./components/footer/footer.component.js";
import { ProductService } from "./services/productService.js";
import {
  getCookie,
  deleteCookie,
  setCookie,
} from "./utility/CookiesLibrary.js";

const productService = new ProductService();
const routes = {
  "/home": {
    page: new HomePage(productService),
    title: "Home",
  },
  "/about": {
    page: new AboutPage(),
    title: "About",
  },
  "/details": {
    page: new DetailsPage(productService),
    title: "Product Details",
  },
  "/login": {
    page: new LoginPage(),
    title: "Login",
  },
  "/signup": {
    page: new SignupPage(),
    title: "Sign Up",
  },
  "/notfound": {
    page: new NotFoundPage(),
    title: "Not Found",
  },
};

let router;

window.addEventListener("load", () => {
  const header = document.querySelector("header");
  header.innerHTML = new navbarComponent().render();
  handleAuth();
  handleTheme();
  router = new Router(routes);

  const footer = document.querySelector("footer");
  footer.innerHTML = new footerComponent().render();
});

window.viewProduct = function (id) {
  router.navigate(`/details?id=${id}`);
};

function handleAuth() {
  const loginDiv = document.getElementById("login-div");
  const logoutDiv = document.getElementById("logout-div");
  const logoutBtn = document.getElementById("logoutBtn");
  const isLoggedIn = getCookie("isLoggedIn") === "true";
  const currentPath = window.location.pathname;
  loginDiv.style.display = isLoggedIn ? "none" : "block";
  logoutDiv.style.display = isLoggedIn ? "block" : "none";

  if (!isLoggedIn && currentPath !== "/login" && currentPath !== "/signup") {
    window.history.replaceState({}, "", "/login");
  }

  if (isLoggedIn && currentPath === "/login") {
    window.history.replaceState({}, "", "/home");
  }

  logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    deleteCookie("isLoggedIn");
    window.history.replaceState({}, "", "/login");
    location.reload();
  });
}
function handleTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  const themeStyle = document.getElementById("theme-style");
  const savedTheme = getCookie("theme") || "light";

  themeStyle.setAttribute(
    "href",
    savedTheme === "dark" ? "./src/styles/dark.css" : "./src/styles/light.css",
  );
  themeToggle.addEventListener("click", () => {
    const currentTheme = getCookie("theme") || "light";
    const newTheme = currentTheme === "light" ? "dark" : "light";
    themeStyle.setAttribute(
      "href",
      newTheme === "dark" ? "./src/styles/dark.css" : "./src/styles/light.css",
    );
    setCookie("theme", newTheme, 30);
  });
}
