import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import WebDevelopmentPage from "./pages/WebDevelopmentPage";
import PortfolioPage from "./pages/portfolio";
import PortfolioDetail from "./pages/PortfolioDetail";
import StackScrollTest from "./pages/StackScrollTest";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/web-development" element={<WebDevelopmentPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:id" element={<PortfolioDetail />} />
          <Route path="/stack-scroll-test" element={<StackScrollTest />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
