import { Link, NavLink } from "react-router";

function DesktopNavbar() {
  return (
    <div className="flex justify-between items-center px-3 max-w-[1200px] m-auto">
      <Link to={"/"}>
        <div className="flex flex-col ">
          <span className="font-mono font-bold uppercase">Maliwan</span>
          <span className="font-mono tracking-widest">Alumium & Glass</span>
        </div>
      </Link>
      <div>
        <ul className="flex gap-x-5">
          <NavItem to="/" label="home" />
          <NavItem to="about" label="about" />
          <NavItem to="products" label="products" />
          <NavItem to="projects" label="projects" />
          <NavItem to="contact" label="contact" />
        </ul>
      </div>
    </div>
  );
}

export default DesktopNavbar;

type NavItemProps = {
  to: string;
  label: string;
};
function NavItem({ to, label }: NavItemProps) {
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "capitalize font-semibold p-2 rounded bg-amber-500 text-white"
            : "capitalize font-semibold"
        }
        to={to}
      >
        {label}
      </NavLink>
    </li>
  );
}
