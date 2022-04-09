import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
//import SignUpForm from "./pages/SignUpForm";
import SignInForm from './SignInForm.jsx';

import './Login.css';

class LoginApp extends Component {
	render() {
		return (
			<div className='App'>
				<div className='appAside' />
				<div className='appForm'>
					<div className='formTitle'>
						<NavLink to='/home' className='formTitleLink'>
							Sign In
						</NavLink>{' '}
					</div>
				</div>
			</div>
		);
	}
}

export default LoginApp;
