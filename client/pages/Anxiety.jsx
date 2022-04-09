import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SentTemplate from '../components/SentTemplate.jsx';
import RecievedTemplate from '../components/RecievedTemplate.jsx';


const AnxietyPage = () => {
  
  const navigate = useNavigate();
  const [chirp, setChirp] = useState({});
  const [message, setMessage] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/api/anxiety/${id}`)
      .then((res) => res.json())
      .then((chirp) => {
        setMessage(chirp[0].content);
        setChirp(chirp[0]);
      })
      .catch((err) => console.log(err));
  }, []);

	const handleMessageChange = e => setMessage(e.target.value);

  const deleteChirp = (id) => {
    fetch(`http://localhost:3000/api/anxiety/${id}`, { method: "DELETE" })
      .then((res) => (res.ok ? navigate("/") : null))
      .catch((err) => console.log(err));
  };

  const editChirp = (id, anxiety_post) => {
    const editChirpBody = {
      content: anxiety_post,
    };

		fetch(`http://localhost:3000/api/anxiety/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(editChirpBody),
		})
			.then(res => (res.ok ? navigate('/') : null))
			.catch(err => console.log(err));
	};

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

export default AnxietyPage;
