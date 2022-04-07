import React, { useState } from 'react';
import SentTemplate from '../components/SentTemplate.jsx';
import RecievedTemplate from '../components/RecievedTemplate.jsx';
// import MessageTemplate from '../components/msgTemplate';

const ADHDApp = () => {
	return (
		// <>
		//     {/* //Create Message Input */}
		//     <div className="container">
		//     <div id="message-display" className="p-3">
		//         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis mollitia autem atque, quis vitae nisi corrupti, asperiores numquam, tenetur nulla nesciunt repellendus omnis eius quos obcaecati sint expedita id a.</p>
		//         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis mollitia autem atque, quis vitae nisi corrupti, asperiores numquam, tenetur nulla nesciunt repellendus omnis eius quos obcaecati sint expedita id a.</p>
		//         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis mollitia autem atque, quis vitae nisi corrupti, asperiores numquam, tenetur nulla nesciunt repellendus omnis eius quos obcaecati sint expedita id a.</p>
		//         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis mollitia autem atque, quis vitae nisi corrupti, asperiores numquam, tenetur nulla nesciunt repellendus omnis eius quos obcaecati sint expedita id a.</p>
		//         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis mollitia autem atque, quis vitae nisi corrupti, asperiores numquam, tenetur nulla nesciunt repellendus omnis eius quos obcaecati sint expedita id a.</p>
		//         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis mollitia autem atque, quis vitae nisi corrupti, asperiores numquam, tenetur nulla nesciunt repellendus omnis eius quos obcaecati sint expedita id a.</p>
		//     </div>
		//     <div id="message-input" className="d-flex justify-content-center w-100">
		//         <input type="text" className="col-10" />
		//         <input type="submit" className="col-2 mx-1 btn btn-primary" />
		//     </div>
		//     </div>
		//     {/* //Create Submit Button */}
		// </>

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
											<span className='input-group-text'>
												<i className='fa fa-send'>Send</i>
											</span>
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
