<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project. -->


This project is Build a multi-page React application using Vite that displays a catalog of products, allows users to search with debouncing, view individual product details, and manage a shopping cart. The app must demonstrate proficient use of hooks, routing, global state, performance optimization, and form validation.


Technical Requirements
1. Setup & Routing 
• Initialize the project usingVite.
• ImplementReact Routerwith three distinct routes:
• /: Home Page (Displays product catalog).
• /product/:id: Product Details Page (Displays single product info).
• /checkout: Checkout Page (Contains the order form).
Lazy load the /product/:id and /checkout routes using React.lazy and <Suspense>. 

2. Custom Hooks & API Integration 
Created a custom hook named useFetch(url) that handles API calls usingAxios.


3. Search & Debouncing
Include a search input on the Home page to filter products by title.


4. Global State: Cart Management 
• Use the Context API combined with useReducer to manage the shopping cart.
• The reducer must handle three actions:
• ADD_TO_CART: Adds a product (or increments quantity if it already exists).
• REMOVE_FROM_CART: Removes a product entirely.
• UPDATE_QUANTITY: Increases or decreases the item count.


5. Performance Optimization 
React.memo:Wrap the ProductCard component so it does not re-render unnecessarily when the parent (Home page) state changes.


6. Advanced Forms 
• On the /checkout page, build a checkout form using React Hook Form.
• Include the following fields with strict validation:
• Full Name:Required, minimum 3 characters.
• Email:Required, valid email pattern.
• Shipping Address:Required.
On successful submission, clear the cart (dispatch a CLEAR_CART action) and show a success message.


commds can use: 
pwd
ls
npm run dev