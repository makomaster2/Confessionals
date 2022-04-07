import React from 'react';


const SentTemplate = () => {
    const username = "Gage";
    const content = "Hello World!";
    const created = "Today, 12:11pm";
    return (
		<>
			{/* Will be new (SENT FROM USER) message template-------------------------------------------- */}
			<li className='clearfix'>
				<div className='message-data'>
					{/* Span for (SENT FROM USER) username here---------------------------------------------------------------- */}
					<span className='mx-2 text-primary'>{username}</span>
					<span className='message-data-time'>
						{/* This is where the created time/date will go---------------------------------------- */}
						{created}
					</span>
				</div>
				<div className='message my-message'>{content}</div>
			</li>
			{/* End of (SENT FROM USER) message template------------------------------------------------- */}
		</>
	);
};

export default SentTemplate;
