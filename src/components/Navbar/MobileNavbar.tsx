import { useState } from "react";
import { Link, NavLink } from "react-router";

function MobileNavbar() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <div className="w-full h-full flex justify-between px-3 border-b border-default">
        <Link to={"/"} onClick={() => setOpenNav(false)}>
          <div className="flex flex-col ">
            <span className="font-mono font-bold uppercase">Maliwan</span>
            <span className="font-mono tracking-widest">Alumium & Glass</span>
          </div>
        </Link>
        <div className="flex items-center">
          <button
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary cursor-pointer"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => setOpenNav((currentState) => !currentState)}
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
        </div>
      </div>
      {openNav && (
        <>
          <ul className="w-full px-3 py-1 bg-amber-100 flex flex-col justify-center">
            <OpenNavItem to={"/"} label="Home" setOpenNav={setOpenNav} />
            <OpenNavItem to={"about"} label="About" setOpenNav={setOpenNav} />
            <OpenNavItem
              to={"products"}
              label="Products"
              setOpenNav={setOpenNav}
            />
            <OpenNavItem
              to={"projects"}
              label="projects"
              setOpenNav={setOpenNav}
            />
            <OpenNavItem
              to={"contact"}
              label="Contact"
              setOpenNav={setOpenNav}
            />
          </ul>
        </>
      )}
    </>
  );
}

export default MobileNavbar;

interface OpenNavItemProps {
  to: string;
  label: string;
  setOpenNav: (value: boolean) => void;
}

function OpenNavItem({ to, label, setOpenNav }: OpenNavItemProps) {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "flex items-center h-10 rounded-lg w-full px-4  font-semibold font-mono capitalize bg-amber-700 text-white"
          : "flex items-center h-10 rounded-lg w-full px-4  font-semibold font-mono capitalize hover:bg-amber-200 cursor-pointer"
      }
      onClick={() => setOpenNav(false)}
      to={to}
    >
      <li>{label}</li>
    </NavLink>
  );
}
