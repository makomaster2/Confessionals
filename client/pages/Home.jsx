import React, { useState, useEffect } from 'react';

const Home = () => {
	const [username, setUsername] = useState('');

	const handleUsernameChange = e => {
		setUsername(e.target.value);
		fetchUser();

	}

	const fetchUser = () => {
        fetch("http://localhost:3000/api/users") // GET request
            .then(res => res.json())
            .then(username => setUsername(username))
            .catch(err => console.log(err));

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

				<footer>
					<h5>
						If you or someone else are in an immediate mental health
						emergency, the National Crisis Hotline has free,
						non-judmental, supportive services and counselors
						waiting to help. Do not hesistate to call
						(1-800-273-8255) or text (HOME to 741741) at anytime,
						day or night.
					</h5>
					<h5>
						If you would like to seek continued mental health
						counseling, psychologytoday.com has extended search
						options and services to help pinpoint a certified mental
						health professional versed in your specific needs near
						you.{' '}
					</h5>
				</footer>
			</div>
		</>
	);
};

export default Home;
