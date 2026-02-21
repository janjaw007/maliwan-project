import { useEffect, useState } from "react";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

function NavbarApp() {
  const [isMobileView, setMobileView] = useState(
    window.innerWidth > 798 ? false : true,
  );

  useEffect(() => {
    function checkView() {
      if (window.innerWidth > 798) {
        setMobileView(false);
      } else {
        setMobileView(true);
      }
    }

    checkView();

    window.addEventListener("resize", checkView);

    return () => window.removeEventListener("resize", checkView);
  }, []);

  return (
    <nav className="sticky top-0 left-0 h-12.5 bg-amber-300">
      {isMobileView ? <MobileNavbar /> : <DesktopNavbar />}
    </nav>
  );
}

export default NavbarApp;
