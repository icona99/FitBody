import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import About from "./components/about/About";
import Profile from "./components/profile/Profile";
import Classes from "./components/classes/Classes";
import AddClass from "./components/addClass/AddClass";
import Details from "./components/details/Details";
import EditCard from "./components/edit/EditCard";
import NotFound from "./components/not-found/NotFound.jsx";
import { authContext } from "./context/authContext.js";

import '@fortawesome/fontawesome-free/css/all.min.css';
import '../public/styles/styles.css';


function App() {

const [authState,setAuthState]=useState({})

const changeAuthState=(state)=>{
  setAuthState(state)
}
const contextData={
  userId:authState._id,
  email:authState.email,
  accessToken:authState.accessToken,
  iwsAuthenticated:!!authState.email,
  changeAuthState,
}

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
          <Route path="/profile" element={<Profile />} />
          <Route path="/addClass" element={<AddClass />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/edit/:id" element={<EditCard />} />
          <Route path="*" element={ <NotFound/>} />
        </Routes>
      </div>
      <Footer />
    </div>
    </authContext.Provider>
  );
}

export default App;
