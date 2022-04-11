import React from 'react';


const SentTemplate = ({username, message, created}) => {
    // const username = "Gage"; //testing purposes
    // const content = "Hello World!"; //testing purposes
    // const created = "Today, 12:11pm"; //testing purposes
    return (
		<>
			{/* Will be new (SENT FROM USER) message template-------------------------------------------- */}
			<li className='clearfix'>
				<div className='message-data'>
					{/* Span for (SENT FROM USER) username here---------------------------------------------------------------- */}
					<span className='mx-2 text-white'>{username}</span>
					<span className='message-data-time'>
						{/* This is where the created time/date will go---------------------------------------- */}
						{created}
					</span>
				</div>
				<div className='message my-message'>{message}</div>
			</li>
			{/* End of (SENT FROM USER) message template------------------------------------------------- */}
		</>
	);
};

export default SentTemplate;
