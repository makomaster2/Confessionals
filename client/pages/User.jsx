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
				<div className='row'>Home Page</div>

				<form action=''>
					<input
						type='text'
						name='name'
						id=''
						onChange={handleUsernameChange}
						value={username}
					/>
					<button onClick={setUser}>Set Username</button>
				</form>

				<link></link>

				
			</div>
		</>
	);
};

export default Home;
