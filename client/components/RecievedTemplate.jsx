import React from 'react';

const RecievedTemplate = () => {
	const username = 'Branwin';
	const content = 'Hello World! sdfasdfasdfasdfa sdfasdfasdfasdfasdfasdf';
	const created = 'Today, 12:11pm';
	return (
		<>
			{/* Will be new (RECIEVED FROM OTHER) message template-------------------------------------------- */}
			<li className='clearfix'>
				<div className='message-data text-right'>
					{/* Span for (RECIEVED FROM OTHER) username here---------------------------------------------------------------- */}
					<span className='message-data-time'>
						{/* This is where the created time/date will go---------------------------------------- */}
						{created}
					</span>
					<span className='mx-2 text-primary'>{username}</span>
				</div>
				<div className='message other-message float-right'>
					{' '}
					{content}{' '}
				</div>
			</li>
			{/* End of (RECIEVED FROM OTHER) message template------------------------------------------------- */}
		</>
	);
};

export default RecievedTemplate;
