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
  <Router basename='/snap-app'>
<Routes>
<Route index  element={<Home />} />
<Route path='/company' element={<Company/>} />
<Route path='/features' element={<Features />} />
<Route path='/Careers' element={<Careers />} />
<Route path='/about' element={<About />} />
</Routes>
</Router>
    </div>
  );
}

export default App;
