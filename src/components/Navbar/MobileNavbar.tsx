import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link, NavLink } from "react-router";

function MobileNavbar() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <div className="w-full flex justify-between items-center px-5 h-16">
        <Link to={"/"} onClick={() => setOpenNav(false)}>
          <div className="flex flex-col justify-center ">
            <span className="font-sans text-2xl font-extrabold tracking-tighter text-neutral-800 leading-none">
              MALIWAN<span className="text-amber-500">.</span>
            </span>
            <span className="font-sans text-[0.65rem] font-medium tracking-[0.25em] text-neutral-500 uppercase mt-1">
              Aluminium & Glass
            </span>
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
      <AnimatePresence>
        {openNav && (
          <>
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 w-full px-4 py-4 bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-100 flex flex-col gap-y-1 z-40"
            >
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
            </motion.ul>
          </>
        )}
      </AnimatePresence>
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
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "flex items-center h-10 rounded-lg w-full px-4 font-semibold font-sans capitalize bg-amber-50 text-amber-600 transition-colors duration-200"
            : "flex items-center h-10 rounded-lg w-full px-4 font-medium font-sans text-neutral-500 capitalize hover:bg-neutral-50 hover:text-neutral-900 transition-colors duration-200 cursor-pointer"
        }
        onClick={() => setOpenNav(false)}
        to={to}
      >
        {label}
      </NavLink>
    </li>
  );
}
