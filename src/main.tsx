import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";

//const router = createBrowserRouter([{ path: "/", element: <>Hola Mundo!</> }]);
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/producto", element: <>mis productos</> },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
