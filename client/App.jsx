import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import AnxietyPage from './pages/Anxiety.jsx';
import DepressionPage from './pages/Depression.jsx';
import ADHDPage from './pages/ADHD.jsx';
import RagePage from './pages/Rage.jsx';
import LoginApp from './LoginForm/Login.jsx';
// import img from '../client/images/banner.png';

const App = () => {
	return (
		<BrowserRouter>
			{/* adding depression page route */}
			<Navbar />
			{/* <div className="container w-100">
			<img className=' mt-5' id='banner' src={img} alt="" />
			</div> */}
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
			<div id='hotlinebling' className='container text-center'>
				<footer>
					<h5>
						<cite>
							If you or someone else are in an immediate mental
							health emergency, the National Crisis Hotline has
							free, non-judmental, supportive services and
							counselors waiting to help. Do not hesistate to call 
							<a href="tel:+18002738255"> 1-800-273-8255</a> or text <span style={{'color': 'green'}}>HOME to 741741</span> at
							anytime, day or night.
						</cite>
					</h5>
					<h5>
						<cite>
							If you would like to seek continued mental health
							counseling, <a href='psychologytoday.com'>psychologytoday.com</a> has extended search
							options and services to help pinpoint a certified
							mental health professional versed in your specific
							needs near you.{' '}
						</cite>
					</h5>
				</footer>
			</div>
		</BrowserRouter>
	);
};

export default App;
