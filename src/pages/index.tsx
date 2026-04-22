import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import ProductDetail from "./ProductDetail";

//const router = createBrowserRouter([{ path: "/", element: <>Hola Mundo!</> }]);
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/products", element: <Product /> },
  { path: "/products/:id", element: <ProductDetail /> },
  // { path: "/products/:name", element: <ProductDetail /> }, // nombres distintos de parametros
  // { path: "/products/:id/:name", element: <ProductDetail /> }, // varios parametros
]);

export default router;
