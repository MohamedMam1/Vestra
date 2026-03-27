# Vestra - Vanilla JavaScript SPA

A **Single Page Application (SPA)** built with **vanilla JavaScript**.

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Features

- **Client-side routing** - Navigate between pages without page reloads
- **Dynamic content rendering** - Fetch and display products from public API
- **Theme switching** - Light and dark mode toggle

## Tech Stack

- **Vanilla JavaScript** - No frameworks or libraries
- **HTML5 & CSS3** - Modern web standards
- **FakeStore API** - Public API for product data

## Project Structure

```
src/
├── components/
│   ├── navbar/              # Navigation menu
│   ├── footer/              # Footer section
│   └── card/                # Product card component
│
├── pages/
│   ├── home/                # Products list page
│   ├── details/             # Single product page
│   ├── login/               # Login page
│   ├── signup/              # Sign up page
│   └── about/               # About page
|   └── notfound/            # notfound page
│
├── services/
│   └── productService.js    # Fetches data from public API
│
├── styles/
│   ├── main.css
│   ├── light.css            # Light theme
│   └── dark.css             # Dark theme
│
├── utility/
│   ├── authUtility.js       # Login/signup logic
│   └── CookiesLibrary.js    # Cookie handling
│
├── main.js                  # App entry point
├── router.js                # Client-side routing
└── style.css                # Stylesheet imports
```
