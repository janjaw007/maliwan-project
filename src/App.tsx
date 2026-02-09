import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import NavbarApp from "./components/Navbar/NavbarApp";

function PageLayout({ children }: { children: React.ReactNode }) {
  return <div className="pt-24 min-h-screen bg-gray-50">{children}</div>;
}

function App() {
  return (
    <div>
      <NavbarApp />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="about"
            element={
              <PageLayout>
                <About />
              </PageLayout>
            }
          />
          <Route
            path="products"
            element={
              <PageLayout>
                <Products />
              </PageLayout>
            }
          />
          <Route
            path="projects"
            element={
              <PageLayout>
                <Projects />
              </PageLayout>
            }
          />
          <Route
            path="contact"
            element={
              <PageLayout>
                <Contact />
              </PageLayout>
            }
          />
          <Route
            path="*"
            element={
              <PageLayout>
                <NotFound />
              </PageLayout>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
