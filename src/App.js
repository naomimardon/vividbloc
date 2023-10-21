import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';

const App = () => {
  return (
    <Router>
    <div>
        <Routes>
          <Route path="/" element={<Homepage/>} />
        </Routes>
    </div>
    <div>
      
    </div>
  </Router>
  );
}

export default App;
