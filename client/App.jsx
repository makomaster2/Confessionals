import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import AnxietyPage from './pages/Anxiety.jsx';
import DepressionPage from './pages/Depression.jsx';
import ADHDPage from './pages/ADHD.jsx';
import RagePage from './pages/Rage.jsx';
import LoginApp from './LoginForm/Login.jsx';

const App = () => {
	return (
		<BrowserRouter>
			{/* adding depression page route */}
			<Navbar />
			<Routes>
				//Add routes for pages
				<Route path='/' element={<LoginApp />} />
				<Route path='/home' element={<Home />} />
				<Route path='/adhd' element={<ADHDPage />} />
				<Route path='/anxiety' element={<AnxietyPage />} />
				<Route path='/depression' element={<DepressionPage />} />
				<Route path='/rage' element={<RagePage />} />
				<Route
					path='*'
					element={
						<h1 class='text-center'>404 This page doesn't exist</h1>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
