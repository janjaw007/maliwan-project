import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router";

const DesktopNavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <li>
    <NavLink
      to={to}
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

const MobileNavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <li>
    <NavLink
      to={to}
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

function NavbarApp() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-white/90 backdrop-blur-xl shadow-sm transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link
          to="/"
          className="flex flex-col group z-10"
          aria-label="Maliwan Homepage"
        >
          <span className="text-2xl font-bold tracking-tighter text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
            MALIWAN
          </span>
          <span className="text-[10px] uppercase tracking-[0.35em] text-gray-400 group-hover:text-orange-400 transition-colors duration-300">
            Aluminium & Glass
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-8">
            <DesktopNavLink to="/">Home</DesktopNavLink>
            <DesktopNavLink to="/about">About</DesktopNavLink>
            <DesktopNavLink to="/products">Products</DesktopNavLink>
            <DesktopNavLink to="/projects">Projects</DesktopNavLink>
            <li>
              <Link
                to="/contact"
                className="ml-4 rounded-sm bg-gray-900 px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-lg"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="group relative z-50 flex h-10 w-10 items-center justify-center rounded-full bg-transparent focus:outline-none md:hidden"
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <div className="flex flex-col gap-1.5 items-end w-6">
            <span
              className={`h-[2px] bg-gray-900 transition-all duration-300 ease-out ${isMobileMenuOpen ? "w-6 rotate-45 translate-y-2" : "w-full"}`}
            />
            <span
              className={`h-[2px] bg-gray-900 transition-all duration-300 ease-out ${isMobileMenuOpen ? "w-0 opacity-0" : "w-3/4"}`}
            />
            <span
              className={`h-[2px] bg-gray-900 transition-all duration-300 ease-out ${isMobileMenuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-1/2 group-hover:w-full"}`}
            />
          </div>
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-xl transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="Mobile navigation" className="py-2">
          <ul className="flex flex-col">
            <MobileNavLink to="/">Home</MobileNavLink>
            <MobileNavLink to="/about">About</MobileNavLink>
            <MobileNavLink to="/products">Products</MobileNavLink>
            <MobileNavLink to="/projects">Projects</MobileNavLink>
            <li className="p-4 pt-2">
              <Link
                to="/contact"
                className="block w-full rounded-sm bg-gray-900 py-3 text-center text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-orange-600"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavbarApp;
