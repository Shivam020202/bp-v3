import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import WebDevelopmentPage from "./pages/WebDevelopmentPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/web-development" element={<WebDevelopmentPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
