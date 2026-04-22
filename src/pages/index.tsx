import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import ProductDetail from "./ProductDetail";
import Layout from "./Layout";
import ErrorDetail from "./ErrorDetail";
import AuthorizedUsers from "./AuthorizedUsers";

//const router = createBrowserRouter([{ path: "/", element: <>Hola Mundo!</> }]);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorDetail />,
    children: [
      // { path: "/", element: <Home /> },
      // { path: "/products", element: <Product /> },
      // { path: "/products/:id", element: <ProductDetail /> },
      { index: true, element: <Home /> },
      {
        element: <AuthorizedUsers />,
        children: [
          { path: "products", element: <Product /> },
          { path: "products/:id", element: <ProductDetail /> },
        ],
      },
    ],
  },

  // { path: "/products/:name", element: <ProductDetail /> }, // nombres distintos de parametros
  // { path: "/products/:id/:name", element: <ProductDetail /> }, // varios parametros
]);

export default router;
