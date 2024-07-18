import './App.css';
import React from 'react';
import { AppRoutes } from "./routes/AppRoutes";
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
      <AppRoutes />
      </ThemeProvider>
    </div>
  );
}

export default App;
