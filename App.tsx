import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Landing from './pages/Landing';
import FilmIndex from './pages/FilmIndex';
import FilmExample from './pages/FilmExample';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

// Responsive Site Frame Component (10px on mobile, 16px on desktop)
const SiteFrame = () => (
  <>
    <div className="fixed top-0 left-0 w-full h-[10px] md:h-[16px] bg-white z-[9990] pointer-events-none" />
    <div className="fixed bottom-0 left-0 w-full h-[10px] md:h-[16px] bg-white z-[9990] pointer-events-none" />
    <div className="fixed top-0 left-0 w-[10px] md:w-[16px] h-full bg-white z-[9990] pointer-events-none" />
    <div className="fixed top-0 right-0 w-[10px] md:w-[16px] h-full bg-white z-[9990] pointer-events-none" />
  </>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    // Scroll to top on navigation to distinct routes
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
       <Header />
       <main className="flex-grow">
        {children}
       </main>
       <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <SiteFrame />
      <Routes>
        {/* Landing is the primary entry point (Home) */}
        <Route path="/" element={<Layout><Landing /></Layout>} />
        {/* Other routes */}
        <Route path="/films" element={<Layout><FilmIndex /></Layout>} />
        <Route path="/films/:id" element={<Layout><FilmExample /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
      </Routes>
    </HashRouter>
  );
};

export default App;