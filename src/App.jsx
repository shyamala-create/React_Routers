import { createBrowserRouter, RouterProvider } from "react-router";
import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";
import ProductLoader from "./loader/unit/productLoader.js";

const routes = [
  {
    path: "/",
    element: <Products />,
    loader: ProductLoader,
    hydrateFallbackElement: <h1>Loading Products...</h1>
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/about",
    element: <h1>About Us</h1>,
  },
];

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});

function App() {
  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  );
}

export default App;
