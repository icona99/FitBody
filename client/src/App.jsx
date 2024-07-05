import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register'
import About from './components/About';
import Profile from './components/Profile';
import Classes from './components/Classes';
import AddClass from './components/addClass';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/classes' element={<Classes />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/addClass' element={<AddClass />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

