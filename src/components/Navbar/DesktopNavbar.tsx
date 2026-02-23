import { Link, NavLink } from "react-router";
import { motion } from "framer-motion";
function DesktopNavbar() {
  return (
    <div className="flex justify-between items-center px-5 h-16  max-w-[1200px] m-auto">
      <Link to={"/"}>
        <div className="flex flex-col justify-center">
          <span className="font-sans text-2xl font-extrabold tracking-tighter text-neutral-800 leading-none">
            MALIWAN<span className="text-amber-500">.</span>
          </span>
          <span className="font-sans text-[0.65rem] font-medium tracking-[0.25em] text-neutral-500 uppercase mt-1">
            Aluminium & Glass
          </span>
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
    <li className="relative">
      <NavLink
        to={to}
        className={({ isActive }) =>
          `relative px-4 py-2 capitalize font-semibold transition-colors duration-300 ${
            isActive
              ? "text-amber-600"
              : "text-neutral-500 hover:text-amber-600"
          }`
        }
      >
        {({ isActive }) => (
          <>
            <span>{label}</span>

            {isActive && (
              <motion.div
                layoutId="nav-underline"
                className="absolute bottom-0 left-2 right-2 h-[2px] bg-amber-500 rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </>
        )}
      </NavLink>
    </li>
  );
}
