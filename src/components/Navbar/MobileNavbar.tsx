import { useState } from "react";
import { Link } from "react-router";

function MobileNavbar() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <div className="bg-red-300 w-full h-full flex justify-between">
        <div className="flex flex-col ">
          <span>Maliwan</span>
          <span>Alumium & Glass</span>
        </div>
        <div>
          <button onClick={() => setOpenNav((currentState) => !currentState)}>
            burger logo
          </button>
        </div>
      </div>
      {openNav && (
        <>
          <ul className="w-full ">
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
    <li className="flex items-center h-10 bg-amber-200">
      <Link onClick={() => setOpenNav(false)} to={to}>
        {label}
      </Link>
    </li>
  );
}
