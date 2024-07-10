import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import Register from './components/register/Register'
import About from './components/about/About';
import Profile from './components/profile/Profile';
import Classes from './components/classes/Classes';
import AddClass from './components/addClass/AddClass';
import DetailsCard from './components/classes/details/Details';

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
        <Route path='/details' element={<DetailsCard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

