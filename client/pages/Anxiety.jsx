import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SentTemplate from '../components/ReceivedTemplate.jsx';
import RecievedTemplate from '../components/SentTemplate.jsx';

const AnxietyPage = () => {
	const [username, setUsername] = useState('');
	const [message, setMessage] = useState('');
	const [chirps, setChirps] = useState([
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

	// const handleUsernameChange = e => setUsername(e.target.value);

	const handleMessageChange = e => setMessage(e.target.value);

	const handleChirpSubmit = e => {
		e.preventDefault();

		let newChirp = {
			id: 1,
			username: 'Mako',
			message: message,
		};

		setChirps([...chirps, newChirp]);
		setMessage('');
	};

	return (
		<>

			<div className='container'>
				<div className='row clearfix'>
					<div className='col-lg-12'>
						<div id='chat' className='card chat-app'>
							<div className='chat'>
								<div className='chat-history'>
									{/* Messages are stored in this unordered list. New messages will be added to list items in this list */}
									<ul className='m-b-0'>
										<RecievedTemplate />

										{chirps.map(chirp => (
										<SentTemplate 
											key={chirp.id}
											username={chirp.username}
											message={chirp.message}
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

export default AnxietyPage;
