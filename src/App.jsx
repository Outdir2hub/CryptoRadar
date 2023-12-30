import FooterComponent from "./components/ui/Footer.component";
import NavabarComponent from "./components/ui/Navabar.component";

import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/Home.page";
import AboutUsPage from "./pages/AboutUs.page";
import ContactUsPage from "./pages/ContactUs.page";
import FAQPage from "./pages/FAQ.page";

function App() {
  return (
    <div>
      {/* Navbar */} 
      <NavabarComponent />
      {/* Wrapper */}
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
      </div>
      {/* Footer */}
      <FooterComponent />
    </div>
  );
}

export default App;

/*
/
/faq
/about-us
/contact-us
*/