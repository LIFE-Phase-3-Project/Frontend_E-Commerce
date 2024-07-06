import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar.jsx';
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="App">

      <NavBar className="sticky top-0 z-50"/>  {/**sticky might not work bc page too short to test */}
     <Footer/>
    </div>
  );
}

export default App;
