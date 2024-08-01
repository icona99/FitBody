import React, { useContext, useState,useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import About from "./components/about/About";
import Classes from "./components/classes/Classes";
import Search from "./components/search/Search.jsx";
import CreateClass from "./components/createClass/CreateClass.jsx";
import Details from "./components/details/Details";
import EditCard from "./components/edit/EditCard";
import NotFound from "./components/not-found/NotFound.jsx";
import { authContext } from "./context/authContext.js";

import '@fortawesome/fontawesome-free/css/all.min.css';
import '../public/styles/styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




function App() {

  const [authState, setAuthState] = useState({});

  const changeAuthState = (state) => {
    localStorage.setItem('accessToken', state.accessToken);
    setAuthState(state);
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    setAuthState({});
  };

  const contextData = {
    userId: authState._id,
    email: authState.email,
    accessToken: authState.accessToken,
    isAuthenticated: !!authState.email,
    changeAuthState,
    logout,
  };

  return (
    <authContext.Provider value={contextData}>
      <div className="container">
        <Header />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/about" element={<About />} />
            <Route path="/search" element={<Search />} />
            <Route path="/createClass" element={<CreateClass />} />
            <Route path="/classes/:classId/details" element={<Details />} />
            <Route path="/classes/:classId/edit" element={<EditCard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </authContext.Provider>
  );
}

export default App;
