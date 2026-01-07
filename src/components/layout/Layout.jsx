import { motion } from "framer-motion";
import MegaMenuHeader from "./Header/MegaMenuHeader";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-cream-200 overflow-x-hidden">
      <MegaMenuHeader />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;
