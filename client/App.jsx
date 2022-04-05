import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AnxietyPage from "./pages/Anxiety.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/anxiety" element={<AnxietyPage />} />
            </Routes>
        </BrowserRouter>
    )
};

export default App;