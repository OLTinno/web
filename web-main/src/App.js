import React from 'react';
import './App.css';
import './styles/sectionStyles.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Solution from './components/Solution/Solution';
import Projects from './components/Projects/Projects';
import ReachUs from './components/ReachUs/ReachUs';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Solution />
        <Projects />
        <ReachUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
