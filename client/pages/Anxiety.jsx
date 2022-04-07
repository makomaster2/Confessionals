import React, { useState } from "react";


const AnxietyPage = () => {
    
    const [username, setUsername] = useState("");
    const [newChirp, setChirp] = useState("");
    const [chirpFeed, setFeed] = useState([]);
    
    const handleUsernameChange = e => {
        setUsername(e.target.value);
    }

    const handleChirpChange = e => {
        setChirp(e.target.value);
    }

    function handleAddChirp() {
        const updateFeed = [
            ...chirpFeed,
            {
                id: chirpFeed.length + 1,
                user: "@" + username + ":",
                chirp: newChirp
            }
        ];
        setFeed(updateFeed);
    };

    const chirpToFeed = e => {
        e.preventDefault();
        handleAddChirp();
        setUsername("");
        setChirp("");
    };



    return (
        <>
            
            <div className="d-flex flex-wrap justify-content-evenly container">
                <div className="shadow p-3 mb-5 bg-body rounded align-self-start col-4">
                    <form>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"></span>
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" value={username} onChange={handleUsernameChange} />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text"></span>
                            <textarea className="form-control" placeholder="Your Thoughts..." aria-label="With textarea" value={newChirp} onChange={handleChirpChange}></textarea>
                        </div>
                        <button type="submit" onClick={chirpToFeed} className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="shadow p-3 mb-5 bg-body rounded col-5">


                </div>
            </div>
        </>
    );
};
export default AnxietyPage;
