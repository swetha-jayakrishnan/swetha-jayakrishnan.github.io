import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import BackToTop from './components/BackToTop';
import ThemeProvider from './context/ThemeContext';

function App() {
  const [loading, setLoading] = useState(true);
  const [progressDone, setProgressDone] = useState(false);

  // Listen for when the LoadingScreen finishes
  useEffect(() => {
    function handleProgressDone(e: CustomEvent) {
      setProgressDone(true);
    }
    window.addEventListener('progressDone', handleProgressDone as EventListener);
    return () => window.removeEventListener('progressDone', handleProgressDone as EventListener);
  }, []);

  useEffect(() => {
    if (progressDone) {
      setLoading(false);
    }
  }, [progressDone]);

  return (
    <ThemeProvider>
      {loading ? (
        <LoadingScreen onDone={() => setProgressDone(true)} />
      ) : (
        <div className="min-h-screen">
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
          <BackToTop />
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;