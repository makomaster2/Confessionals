import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SentTemplate from '../components/ReceivedTemplate.jsx'; // Commented out until server-side is done
import RecievedTemplate from '../components/SentTemplate.jsx';

// import uuidv4 from 'uuidv4';

const ADHDPage = () => {
	const [userID, setUserID] = useState(1);
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

	const fetchPosts = async () => {
		const data = await fetch('/api/adhd');
		const posts = await data.json();
		let received = [];
		let sent = [];

		posts.forEach(post => {
			if (post.user_id == userID) {
				sent.push(post);
			} else {
				received.push(post);
			}
		});

		setPostsReceived(received);
		setPostsSent(sent);
	};

	const handleMessageChange = e => setMessage(e.target.value);

	const handlePostSubmit = async e => {
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

		let newPost = {
			user_id: userID,
			username: 'TheRealDrake',
			adhd_post: message,
		};

		const res = await fetch("/api/adhd", {
			method: "POST",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify(newPost)
		});

		fetchPosts();

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
										{postsReceived.map(post => (
											<RecievedTemplate
												key={post.adhd_id}
												username={post.username}
												message={post.adhd_post}
											/>
										))}

										{postsSent.map(post => (
											<SentTemplate
												key={post.adhd_id}
												username={post.username}
												message={post.adhd_post}
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
												onClick={handlePostSubmit}
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
