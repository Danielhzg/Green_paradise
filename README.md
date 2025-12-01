# Green Paradise - Houseplant E-commerce Store

A React application with Redux for managing an e-commerce store selling houseplants.

## Features

### Landing Page
- Beautiful background image
- Company name and description
- Get Started button linking to products

### Product Listing Page
- 6 unique houseplants with thumbnails, names, and prices
- Plants grouped into 3 categories (Tropical, Low Light, Decorative)
- Add to Cart functionality with disabled state after adding

### Shopping Cart Page
- Total number of items and total cost display
- Each plant shows thumbnail, name, and unit price
- Increase/Decrease quantity buttons
- Delete button for removing items
- Checkout button (shows "Coming Soon" message)
- Continue Shopping button

### Header
- Displays on all pages
- Shopping cart icon with item count
- Navigation between pages

## Technology Stack

- React 18
- Redux Toolkit
- React Router DOM
- CSS3

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Redux Store Structure

The Redux store manages the shopping cart state with the following actions:
- `addToCart`: Adds a product to the cart
- `increaseQuantity`: Increases quantity of an item
- `decreaseQuantity`: Decreases quantity of an item
- `removeFromCart`: Removes an item from the cart

## Project Structure

```
src/
  ├── components/
  │   ├── Header.js
  │   └── Header.css
  ├── pages/
  │   ├── Landing.js
  │   ├── Landing.css
  │   ├── ProductListing.js
  │   ├── ProductListing.css
  │   ├── ShoppingCart.js
  │   └── ShoppingCart.css
  ├── store/
  │   ├── store.js
  │   └── cartSlice.js
  ├── data/
  │   └── products.js
  ├── App.js
  ├── App.css
  ├── index.js
  └── index.css
```

