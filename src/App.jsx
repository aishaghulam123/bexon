import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Demos from './components/Demos';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import ScrollProgress from './components/ScrollProgress';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Nav />
      <Hero />
      <Demos />
      <Features />
      <Testimonials />
      <Footer />
      <ScrollProgress />
    </div>
  );
}

export default App;