import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import './App.css';

const App = () => {
  return (
    <Router>
    <div>
        <Routes>
          <Route path="/" element={<Homepage/>} />
        </Routes>
    </div>
  </Router>
  );
}

export default App;
