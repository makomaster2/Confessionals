import React, { useState, useEffect } from 'react';
import { USERKEY } from '../constants';
import imageBanner from '../images/banner1.jpg';

const Home = () => {
	const [username, setUsername] = useState('');

	const handleUsernameChange = e => setUsername(e.target.value);

	const handleFormSubmit = async e => {
		e.preventDefault(); // don't submit the form
		let newUserResponse = await fetch('/api/users', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ name: username}),
		});
		let newUserId = await newUserResponse.json();
		localStorage.setItem(USERKEY, newUserId);
		// TODO redirect to a chatroom or something
	};

	return (
		<>
			<div className='container'>
				<img id='banner1' src={imageBanner} alt='' />
			</div>
			<div className='container text-center'>
				<form onSubmit={handleFormSubmit}>
					<input
						type='text'
						name='name'
						id=''
						onChange={handleUsernameChange}
						value={username}
						className='m-5'
					/>
					<button>Set Username</button>
				</form>

				<link></link>
			</div>
		</>
	);
};

export default Home;
