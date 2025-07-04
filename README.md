# React Vite E-Commerce Demo

This project is a simple e-commerce demo built with React, Vite, React Router, and Tailwind CSS. It demonstrates product listing, cart management, and modern UI styling.

## Application Overview
- **Product List:** Browse a list of products with category, image, and price.
- **Add to Cart:** Add products to your cart from the product list page.
- **Cart Page:** View your selected products, adjust quantities for each item, and see the total price per item.
- **Navigation:** Use the navigation bar to switch between the product list and the cart page.
- **Responsive Design:** The UI is styled with Tailwind CSS for a modern, responsive look.

## Important Note: Cart Persistence
- **Cart is not persistent:** Navigating back to the product page and then returning to the cart will clear your cart, because the cart state is only stored in memory (React state) and not in local storage or a backend.
- **How it works:** When you add items to the cart, the cart data is passed via React Router's navigation state. If you refresh the page or navigate away and back, the cart will be empty.
- **How to persist cart:** To keep cart items between page reloads or navigation, needs to implement local storage or a backend API.

## How to Use
1. **Start the app:**
   - Install dependencies: `npm install`
   - Start the dev server: `npm run dev`
   - Open your browser at [http://localhost:5173](http://localhost:5173)
2. **Browse products:**
   - The home page displays a grid of products.
   - Click "Add to Cart" to add a product.
3. **View cart:**
   - Click the cart button in the navbar to view your cart.
   - Adjust quantities using the + and - buttons.
   - The total price updates as you change quantities.
4. **Navigation:**
   - Use the navbar to switch between the product list and cart.
   - Remember: navigating back to the product page and then to the cart will reset your cart.

## Project Structure
- `src/pages/Products.jsx` – Product listing and add to cart
- `src/pages/Cart.jsx` – Cart page with quantity controls
- `src/App.jsx` – Main app component
- `src/index.css` – Tailwind CSS directives
- `tailwind.config.js` – Tailwind configuration

## Customization
- To add more products, update your data source or loader.
- To persist cart data, use local storage or a backend API.

## License
This project is for educational/demo purposes.
