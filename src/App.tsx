// import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Activities from './components/Activities';
import Members from './components/Members';
// import Events from './components/Events';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Activities />
        <Members />
        {/* <Events /> */}
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;