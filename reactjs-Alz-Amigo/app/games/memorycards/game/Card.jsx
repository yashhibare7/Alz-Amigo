"use client"
import React from 'react';

const Card = ({ content, isFlipped, onClick }) => {
    return (
        <div
            className={`card ${isFlipped ? 'flipped' : ''}`}
            onClick={onClick}
        >
            <div className="card-inner">
                <div className="card-front">
                    {isFlipped ? (
                        <div className="card-content">{content}</div>
                    ) : (
                        <div className="card-back"></div>
                    )}
                </div>
                <div className="card-back">
                    {isFlipped ? (
                        <div className="card-content">{content}</div>
                    ) : (
                        <div className="card-back"></div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;
