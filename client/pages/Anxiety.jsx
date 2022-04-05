import React from "react";

const AnxietyPage = () => {
    return (
        <>
            <div className="container">
                <div class="form-outline">
                    <textarea
                        class="form-control" 
                        id="textAreaExample1"
                        rows="4"
                    ></textarea>
                    <label class="form-label" for="textAreaExample">
                        Message
                    </label>
                </div>
            </div>
            <div className="container">
                <button type="button" class="btn btn-dark">
                    Submit
                </button>
            </div>
            <div className="container">
                <button type="button" class="btn btn-dark">
                    Return
                </button>
            </div>
        </>
    );
};

export default AnxietyPage;
