import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import WebDevelopmentPage from "./pages/WebDevelopmentPage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/portfolio";
import PortfolioDetail from "./pages/PortfolioDetail";
import AIServicesPage from "./pages/AIServicesPage";
import Contact from "./pages/Contact";
import CareersPage from "./pages/CareersPage";
import ScrollToTop from "./components/ScrollToTop";

// Service Pages
import SEOOptimizationPage from "./pages/SEOOptimizationPage";
import PaidAdvertisingPage from "./pages/PaidAdvertisingPage";
import SocialMediaPage from "./pages/SocialMediaPage";
import ContentMarketingPage from "./pages/ContentMarketingPage";
import EmailMarketingPage from "./pages/EmailMarketingPage";
import YoutubeMarketingPage from "./pages/YoutubeMarketingPage";
import AIAutomationPage from "./pages/AIAutomationPage";
import GurgaonLocationPage from "./pages/GurgaonLocationPage";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/services/web-development"
            element={<WebDevelopmentPage />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:id" element={<PortfolioDetail />} />
          <Route path="/services/ai-solutions" element={<AIServicesPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<CareersPage />} />

          {/* Service Pages */}
          <Route path="/services/seo-optimization" element={<SEOOptimizationPage />} />
          <Route path="/services/paid-advertising" element={<PaidAdvertisingPage />} />
          <Route path="/services/social-media" element={<SocialMediaPage />} />
          <Route path="/services/content-marketing" element={<ContentMarketingPage />} />
          <Route path="/services/email-marketing" element={<EmailMarketingPage />} />
          <Route path="/services/youtube-marketing" element={<YoutubeMarketingPage />} />
          <Route path="/services/ai-automation" element={<AIAutomationPage />} />

          {/* Location Pages */}
          <Route path="/locations/gurugram" element={<GurgaonLocationPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
