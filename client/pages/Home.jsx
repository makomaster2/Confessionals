import React, { useState, useEffect } from 'react';

const Home = () => {
	const [username, setUsername] = useState('');

	const handleUsernameChange = e => setUsername(e.target.value);

	const setUser = () => {
		let tempUser = username;
	};

	return (
		<>
			<div className='container text-center'>
				<form action=''>
					<input
						type='text'
						name='name'
						id=''
						onChange={handleUsernameChange}
						value={username}
						className='m-5'
					/>
					<button onClick={setUser}>Set Username</button>
				</form>

				<link></link>
			</div>
		</>
	);
};

export default Home;
