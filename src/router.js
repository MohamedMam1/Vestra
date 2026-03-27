import { getCookie } from "./utility/CookiesLibrary.js";

export class Router {
  constructor(routes) {
    this.routes = routes;
    this.container = document.getElementById("app");

    document.addEventListener("click", (e) => {
      const anchor = e.target.closest("a");
      if (anchor) {
        e.preventDefault();
        this.navigate(anchor.getAttribute("href"));
      }
    });

    window.addEventListener("popstate", () => this.handlePopState());

    this.handlePopState();
  }

  navigate(fullPath) {
    const isLoggedIn = getCookie("isLoggedIn") === "true";
    const [cleanPath] = fullPath.split("?");
    if (!isLoggedIn && cleanPath !== "/login" && cleanPath !== "/signup") {
      alert("Login required");
      window.history.pushState({}, "", "/login");
      this.render("/login");
      return;
    }

    if (isLoggedIn && cleanPath === "/login") {
      window.history.pushState({}, "", "/home");
      this.render("/home");
      return;
    }
    window.history.pushState({}, "", fullPath);
    this.render(cleanPath);
  }

  handlePopState() {
    let fullPath = window.location.pathname + window.location.search;
    if (fullPath === "/") {
      const isLoggedIn = getCookie("isLoggedIn") === "true";
      fullPath = isLoggedIn ? "/home" : "/login";
      window.history.replaceState({}, "", fullPath);
    }
    this.navigate(fullPath);
  }

  async render(path) {
    const route = this.routes[path] || this.routes["/notfound"];
    if (!route) return;
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    document.title = `Vestra - ` + route.title;
    this.container.innerHTML = `
      <div class="loading-container">
        <div class="loading-spinner"></div>
        <p class="loading-text">Loading...</p>
      </div>
    `;

    const html = await route.page.render(id);
    this.container.innerHTML = html;
  }
}
