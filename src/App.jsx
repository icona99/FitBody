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
// Импортирайте другите компоненти, ако са налични
// import Register from './components/Register';
// import Classes from './components/Classes';
// import Team from './components/Team';
// import About from './components/About';
// import AddClass from './components/AddClass';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* Дефинирайте другите маршрути */}
        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route path="/classes" element={<Classes />} /> */}
        {/* <Route path="/team" element={<Team />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/addClass" element={<AddClass />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

