import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SentTemplate from '../components/ReceivedTemplate.jsx'; // Commented out until server-side is done
import RecievedTemplate from '../components/SentTemplate.jsx';
import { USERKEY } from '../constants.js';

// import uuidv4 from 'uuidv4';

const DepressionPage = () => {
	const [userID, setUserID] = useState(localStorage.getItem(USERKEY));
	const [message, setMessage] = useState('');
	const [posts, setPosts] = useState([]);
	//const [postsSent, setPostsSent] = useState([]);
	
	useEffect(() => {
		fetchPosts(true);
		setInterval(() => {
			fetchPosts(false);
		}, 1000);
	}, []);
	
	// const handleUsernameChange = e => setUsername(e.target.value);
	
	const fetchPosts = async (forceScroll) => {
		let history = document.getElementById('chat-history');
		let shouldScroll = forceScroll || history.scrollTop === history.scrollHeight;
		const data = await fetch('/api/depression');
		const posts = await data.json();
		setPosts(posts.sort((a, b) => new Date(a.postdate) - new Date(b.postdate)));
		// let received = [];
		// let sent = [];
		
		// posts.forEach(post => {
		// 	if (post.user_id == userID) {
		// 		sent.push(post);
		// 	} else {
		// 		received.push(post);
		// 	}
		// });
		
		// setPostsReceived(received);
		// setPostsSent(sent);

		// scroll to bottom after updates, only if the user is already at bottom
		if (shouldScroll)
			history.scrollTop = history.scrollHeight;
	};

	const handleMessageChange = e => setMessage(e.target.value);

	const handlePostSubmit = async e => {
		e.preventDefault();

		let newPost = {
			user_id: userID,
			depression_post: message,
		};

		const res = await fetch("/api/depression", {
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
								<div id="chat-history" className='chat-history'>
									{/* Messages are stored in this unordered list. New messages will be added to list items in this list */}
									<ul className='m-b-0'>
										{posts.map(post => post.user_id != userID ? (
											<RecievedTemplate
												key={post.depression_id}
												username={post.username}
												message={post.depression_post}
											/>
										) : (
											<SentTemplate
												key={post.depression_id}
												username={post.username}
												message={post.depression_post}
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
export default DepressionPage;
