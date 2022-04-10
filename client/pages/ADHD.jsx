import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SentTemplate from '../components/SentTemplate.jsx'; // Commented out until server-side is done
import RecievedTemplate from '../components/RecievedTemplate.jsx';
// import uuidv4 from 'uuidv4';

const ADHDPage = () => {
	const [username, setUsername] = useState('');
	const [message, setMessage] = useState('');
	const [chirpss, setChirps] = useState([
		{
			id: 2,
			username: 'Gage Jones',
			message: 'I made a TicTacToe game using JavaScript!',
		},
		{
			id: 3,
			username: 'Branwin DuBose',
			message: 'Me and my Doozer friends made an app called LogBook!',
		},
		{
			id: 4,
			username: 'Cody Jett',
			message: 'Noone cares...',
		},
	]);
	useEffect(() => {
        fetchChirps();
    }, []);

	// const handleUsernameChange = e => setUsername(e.target.value);

	const handleMessageChange = e => setMessage(e.target.value);

	const handleChirpSubmit = async (e) => {
		e.preventDefault();
		

        const newUser = {
            name: username
        };

        const newUserRes = await fetch("http://localhost:3000/api/adhd", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser)
        });

        const newUserFromDB = await newUserRes.json();

        const newChirp = {
            id: newUserFromDB.adhd_id,
            content: adhd_post,
        };

        const newChirpRes = await fetch("http://localhost:3000/api/adhd", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newChirp)
        }) // POST request

        console.log(await newChirpRes.json());
        fetchChirps()
    };

	const fetchChirps = () => {
        fetch("http://localhost:3000/api/adhd") // GET request
            .then(res => res.json())
            .then(chirpss => setChirps(chirpss.reverse()))
            .catch(err => console.log(err));
    };
		// let newChirp = {
		// 	id: 1,
		// 	username: username,
		// 	message: message,
		// };

		// setChirps([...chirps, newChirp]);
	

	return (
		<>
			<div className='container'>
				<div className='row clearfix'>
					<div className='col-lg-12'>
						<div className='card chat-app'>
							<div className='chat'>
								<div className='chat-history'>
									{/* Messages are stored in this unordered list. New messages will be added to list items in this list */}
									<ul className='m-b-0'>
										<RecievedTemplate />

										{chirpss.map(chirp => (
										<SentTemplate 
											key={chirp.adhd_id}
											username={chirp.username}
											message={chirp.adhd_post}
										/>
										))}
										
									</ul>
								</div>
								{/* Input for SENT messages */}
								<div className='chat-message clearfix'>
									<form className='input-group mb-0'>
										<div className='input-group-prepend'>
											<input
												type={'submit'}
												className='btn btn-primary'
												id='submit-btn'
												onClick={handleChirpSubmit}
											></input>
										</div>
										<input
											type='text'
											className='form-control'
											placeholder='Enter text here...'
											value={message}
											onChange={handleMessageChange}
										/>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default ADHDPage;
