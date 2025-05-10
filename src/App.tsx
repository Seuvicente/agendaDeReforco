import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import SchedulePage from './pages/SchedulePage';
import SubjectsPage from './pages/SubjectsPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('/');

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case '/':
        return <HomePage />;
      case '/schedule':
        return <SchedulePage />;
      case '/subjects':
        return <SubjectsPage />;
      case '/contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <Layout>
      {renderPage()}
    </Layout>
  );
}

export default App;