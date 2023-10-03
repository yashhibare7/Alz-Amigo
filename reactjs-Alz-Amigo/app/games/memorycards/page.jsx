import React from 'react';

import Rules from './pages/Rules';
import Board from './game/Board';

import "./game/App.css";
import Data from "../../data.json";


export const metadata = {
    title: 'Memory Cards | In-Memory',
    description: 'Memory Cards game! You need to find the correct duet of cars for win',
    keywords: ['memorycards', 'memory-cards', 'memory cards', 'Memory Cards'],
    authors: [{ name: 'memorycards' }],
    creator: 'm0rniac',
    publisher: 'memorycards',
    icons: {
        icon: Data.logo,
    },
}
export default function Page() {
    return (
        <React.Fragment>
            {/* [Corpus; GAME] */}
            <div className='container-fluid d-flex justify-content-center mt-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <Board />
                    </div>
                </div>
            </div>
            <Rules />
        </React.Fragment>
    );
};