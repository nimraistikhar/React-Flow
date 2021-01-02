import React from 'react'
import Feature1 from './components/Feature1';
import Feature2 from './components/Feature2';
import Feature3 from './components/Feature3';
import Footer from './components/Footer';
import Hero from './components/Hero'
import { GlobalStyles } from './globalstyles';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Hero />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Footer />
    </div>
  );
}

export default App;
