import { NavLink } from "react-router";

interface DesktopNavLinkProps {
  to: string;
  children: React.ReactNode;
}

function DesktopNavLink({ to, children }: DesktopNavLinkProps) {
  return (
    <li role="none">
      <NavLink
        to={to}
        role="menuitem"
        className={({ isActive }) =>
          `group relative py-2 text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${
            isActive ? "text-orange-600" : "text-gray-600 hover:text-gray-900"
          }`
        }
      >
        {({ isActive }) => (
          <>
            {children}
            <span
              className={`absolute bottom-0 left-0 h-[1px] bg-orange-600 transition-all duration-300 ease-out ${
                isActive ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </>
        )}
      </NavLink>
    </li>
  );
}

export default DesktopNavLink;
