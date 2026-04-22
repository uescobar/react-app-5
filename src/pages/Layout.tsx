import { NavLink, Outlet } from "react-router-dom";

type Props = {};

function Layout({}: Props) {
  return (
    <div>
      <NavLink className={({ isActive }) => (isActive ? "enabled" : "")} to="/">
        Inicio
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "enabled" : "")}
        to="/products"
      >
        Productos
      </NavLink>
      <Outlet />
    </div>
  );
}

export default Layout;
