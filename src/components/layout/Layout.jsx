import MegaMenuHeader from "./Header/MegaMenuHeader";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <MegaMenuHeader />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
