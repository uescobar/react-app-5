import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";

//const router = createBrowserRouter([{ path: "/", element: <>Hola Mundo!</> }]);
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/producto", element: <>mis productos</> },
]);

export default router;
