import React, { useState } from 'react';
import SentTemplate from '../components/SentTemplate.jsx';
import RecievedTemplate from '../components/RecievedTemplate.jsx';

const ADHDApp = () => {
	const [message, setMessage] = useState([]);

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

										<SentTemplate />
									</ul>
								</div>
								{/* Input for SENT messages */}
								<div className='chat-message clearfix'>
									<div className='input-group mb-0'>
										<div className='input-group-prepend'>
											<input
												type={'submit'}
												className='btn btn-primary'
												id='submit-btn'
											></input>
										</div>
										<input
											type='text'
											className='form-control'
											placeholder='Enter text here...'
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default ADHDApp;
