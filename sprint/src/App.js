import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './element/Home';
import Rewards from './element/Rewards';
import News from './element/News';
import Details from './element/Details';

function App() {
  return (
    <Router>
      <Routes>
        {}
        <Route path="/" element={<Home />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/news" element={<News />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;







