import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import ProductDetail from "./ProductDetail";
import Layout from "./Layout";

//const router = createBrowserRouter([{ path: "/", element: <>Hola Mundo!</> }]);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // { path: "/", element: <Home /> },
      // { path: "/products", element: <Product /> },
      // { path: "/products/:id", element: <ProductDetail /> },
      { index: true, element: <Home /> },
      { path: "products", element: <Product /> },
      { path: "products/:id", element: <ProductDetail /> },
    ],
  },

  // { path: "/products/:name", element: <ProductDetail /> }, // nombres distintos de parametros
  // { path: "/products/:id/:name", element: <ProductDetail /> }, // varios parametros
]);

export default router;
