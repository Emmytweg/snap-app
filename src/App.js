import About from './About';
import './App.css';
import Careers from './Careers'
import Company from './Company';
import Features from './Features'
import Home from './Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div>
  <Router basename=''>
<Routes>
<Route path='/' element={<Home />} />
<Route path='/' element={<Company/>} />
<Route path='/' element={<Features />} />
<Route path='/' element={<Careers />} />
<Route path='/' element={<About />} />
</Routes>
</Router>
    </div>
  );
}

export default App;
