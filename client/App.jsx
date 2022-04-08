import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Navbar from "./pages/Navbar.jsx";
import Home from "./pages/Home.jsx";
import ADHA from "./pages/ADHA.jsx";
import Anxiety from "./pages/Anxiety.jsx";
import Depression from "./pages/Depression.jsx";
import Rage from "./pages/Rage.jsx";


const App = () => {
    return (
        <BrowserRouter>

        {/* adding depression page route */}
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/depression" element={<depression />} />
                <Route path="/adha" element={<ADHA />} />
                <Route path="/anxiety" element={<Anxiety />} />
                <Route path="/rage" element={<Rage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;