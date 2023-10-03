import React from 'react';

export default function Rules() {
    return (
        <div className='container-fluid mt-5 w-75'>
            <h3 className='text-center'>How to Play?</h3>
            <ul>
                {[
                    "You must find the pair for each card.",
                    "For each level you advance, an additional pair of cards will be added.",
                    "The levels are endless, with a limit of 16 cards (8 pairs)."
                ].map((rule, index) => (
                    <li key={`key-${index}`}>{rule}</li>
                ))}
            </ul>
        </div>
    );
}
