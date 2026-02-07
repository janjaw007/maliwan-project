import { NavLink } from "react-router";

function NavbarApp() {
  return (
    <nav>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"about"}>About</NavLink>
      <NavLink to={"products"}>Products</NavLink>
      <NavLink to={"projects"}>Projects</NavLink>
      <NavLink to={"contact"}>Contact</NavLink>
    </nav>
  );
}

export default NavbarApp;
