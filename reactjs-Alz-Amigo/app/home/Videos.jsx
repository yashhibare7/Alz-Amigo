import React from 'react';

export default function VideoPlayer() {
    return (
        <div className='container-fluid mt-5'>
            <h3 className='text-center'>
                What is Alzheimer's?
            </h3>
            <div className="d-flex justify-content-center align-items-center">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                        className="embed-responsive-item"
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/yJXTXN4xrI8"
                        title="YouTube - Alzheimer"
                        allowFullScreen
                        autoPlay
                    ></iframe>
                </div>
            </div>
        </div>
    );
};
