import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ADHDApp from "./pages/ADHD.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                //Add routes for pages
                <Route path="/" element={<Home />} />
                <Route path="/adhd" element={<ADHDApp />} />
            </Routes>
        </BrowserRouter>
    )
};

export default App;