import { NavLink } from "react-router";

interface MobileNavLinkProps {
  to: string;
  children: React.ReactNode;
  closeMenu?: () => void;
}

function MobileNavLink({ to, children, closeMenu }: MobileNavLinkProps) {
  return (
    <li role="none" className="w-full">
      <NavLink
        to={to}
        onClick={closeMenu}
        role="menuitem"
        className={({ isActive }) =>
          `block border-l-2 py-3 pl-6 text-sm font-medium uppercase tracking-widest transition-all duration-200 ${
            isActive
              ? "border-orange-600 bg-orange-50/50 text-orange-700"
              : "border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900"
          }`
        }
      >
        {children}
      </NavLink>
    </li>
  );
}

export default MobileNavLink;
