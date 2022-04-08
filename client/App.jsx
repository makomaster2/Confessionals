import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Depression from "./pages/Depression.jsx";
import ADHDApp from "./pages/ADHD.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                //Add routes for pages
                <Route path="/" element={<Home />} />
                <Route path="/adhd" element={<ADHDApp />} />
                <Route path="/depression" element={<Depression />} />
                <Route path="*" element={<h1 class="text-center">404 This page doesn't exist</h1>} />            
            </Routes>
        </BrowserRouter>
    )
};

export default App;