import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  const [page, setPage] = useState('home');
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [page]);
  const renderPage = () => {
    switch (page) {
      case 'home': return <Home navigate={setPage} />;
      case 'about': return <About navigate={setPage} />;
      case 'services': return <Services navigate={setPage} />;
      case 'contact': return <Contact navigate={setPage} />;
      default: return <Home navigate={setPage} />;
    }
  };
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Navbar current={page} navigate={setPage} />
      <main className="flex-1">{renderPage()}</main>
      <Footer navigate={setPage} />
    </div>
  );
}