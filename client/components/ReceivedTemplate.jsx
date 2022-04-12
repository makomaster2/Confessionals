

import React from 'react';

const RecievedTemplate = ({username, created, message}) => {

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
					<span className='mx-2 text-white'>{username}</span>
				</div>
				<div className='message other-message float-right'>
					{' '}
					{message}{' '}
				</div>
			</li>
			{/* End of (RECIEVED FROM OTHER) message template------------------------------------------------- */}
		</>
	);
};

export default RecievedTemplate;
