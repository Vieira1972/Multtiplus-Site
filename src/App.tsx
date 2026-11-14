import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';

import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { CookiesPolicy } from './pages/CookiesPolicy';
import { TermsOfUse } from './pages/TermsOfUse';
import { CookieBanner } from './components/CookieBanner';
import { BackToTopButton } from './components/BackToTopButton';

const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  return null;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans antialiased text-brand-dark selection:bg-[#714B67]/20">
        <ScrollToHash />
        <CookieBanner />
        <BackToTopButton />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookies-policy" element={<CookiesPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
