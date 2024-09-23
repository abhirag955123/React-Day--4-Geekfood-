import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer'; 



function App() {
  return (
    <div>
      <Navbar />
      <Home />
      {/* Add the Footer component here */}
      <Footer />
    </div>
  );
}

export default App;
