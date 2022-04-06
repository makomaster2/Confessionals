import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Depression from "./pages/Depression.jsx"

const App = () => {
    return (
        <BrowserRouter>

        {/* adding depression page route */}
        
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Depression" element={<depressionPage />} />
            </Routes>
        </BrowserRouter>
    )
};

export default App;