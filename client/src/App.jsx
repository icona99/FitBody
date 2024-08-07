import React, { useEffect, useState } from "react";
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
import PrivateGuard from "./components/common/privateGuard.jsx";
import LoggedGuard from "./components/common/LoggedGuard.jsx";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../public/styles/styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
    const [authState, setAuthState] = useState(() => {
        const savedState = localStorage.getItem("authState");
        try {
            return savedState ? JSON.parse(savedState) : {};
        } catch (error) {
            console.error("Failed to parse authState from localStorage:", error);
            return {};
        }
    });

    const changeAuthState = (state) => {
        localStorage.setItem('authState', JSON.stringify(state));
        setAuthState(state);
    };

    const logout = () => {
        localStorage.removeItem("authState");
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

    useEffect(() => {
        const storedAuthState = localStorage.getItem("authState");
        if (storedAuthState) {
            try {
                setAuthState(JSON.parse(storedAuthState));
            } catch (error) {
                console.error("Failed to parse authState from localStorage:", error);
            }
        }
    }, []);

    return (
        <authContext.Provider value={contextData}>
            <div className="container">
                <Header />
                <div className="main">
                    <Routes>
                        <Route path="/" element={<PrivateGuard />}>
                            <Route path="/" element={<Home />} />
                        </Route>
                        <Route element={<LoggedGuard />}>
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                        </Route>
                        <Route path="/about" element={<About />} />
                        <Route element={<PrivateGuard />}>
                            <Route path="/classes" element={<Classes />} />
                            <Route path="/search" element={<Search />} />
                            <Route path="/createClass" element={<CreateClass />} />
                            <Route path="/classes/:classId/details" element={<Details />} />
                            <Route path="/classes/:classId/edit" element={<EditCard />} />
                        </Route>
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </authContext.Provider>
    );
}

export default App;
