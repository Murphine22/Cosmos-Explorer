import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PlanetsSection from './components/PlanetsSection';
import FeaturesSection from './components/FeaturesSection';
import VideoSection from './components/VideoSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <PlanetsSection />
        <FeaturesSection />
        <VideoSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
