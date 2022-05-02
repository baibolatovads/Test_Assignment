import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/pages/HomePage/Home';
import WhatYouGet from './components/pages/WhatYouGetPage/WhatYouGet';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path = '/' element ={<Home/>} />
        <Route path = '/start-investing' element={<WhatYouGet/>}></Route>
      </Routes>
    </Router>

  );
}

export default App;
