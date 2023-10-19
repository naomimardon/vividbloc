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
      <p className='inter'>Inter</p>
      <p className='istok'>Istok Web</p>
      <p className='irish'>Irish Grover</p>
    </div>
  </Router>
  );
}

export default App;
