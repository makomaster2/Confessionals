import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

//Changed all chirp & Chirp to confession & Confession


const Depression = () => {
    const navigate = useNavigate();
    const [confession, setConfession] = useState({});
    const [message, setMessage] = useState("")
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/api/confessions/${id}`)
            .then(res => res.json())
            .then(confession => {
                setMessage(confession[0].content);
                setConfession(confession[0]);
            })
            .catch(err => console.log(err));
    }, []);

    const handleMessageChange = e => setMessage(e.target.value);

    const deleteConfession = id => {
        fetch(`http://localhost:3000/api/confessions/${id}`, { method: "DELETE" })
            .then(res => res.ok ? navigate("/") : null)
            .catch(err => console.log(err));
    };

    const editConfession = (id, content) => {
        const editConfessionBody = {
            content: content
        };

        fetch(`http://localhost:3000/api/confessions/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editConfessionBody)
        })
            .then(res => res.ok ? navigate("/") : null)
            .catch(err => console.log(err));
    };

    return (
        <>
            <div className="container text-body text-center">
                <div className="row">
                    <div className="col-12 p-0">
                        
                        <nav>
                            <h1>Depression Forum</h1>
                        </nav>
                    </div>
                </div>

                <div className="row">
                    <div className="form-group mb-2">
                        <textarea
                            className="form-control mb-2"
                            aria-label="With textarea"
                            placeholder="(500 characters max)"
                            value={message}
                            onChange={handleMessageChange}
                            cols="30"
                            rows="10"
                        ></textarea>
                        <button className="btn btn-dark mx-2" onClick={() => editConfession(id, message)}>
                            Save
                        </button>
                        <button className="btn btn-dark mx-2" onClick={() => deleteConfession(id)}>
                            Delete
                        </button>
                        {/*need to add a timestamp + edit notification to the message body when edits are submitted*/}
                        <button className="btn btn-dark mx-2" onClick={() => editConfession(message)}>
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Depression;
