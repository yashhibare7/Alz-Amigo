"use client";
import React, { useState, useEffect } from 'react';
import Card from './Card';


import './Board.css';

const cardContents = [
    'A1', 'B2', 'C3', 'D4', 'E5', 'F6', 'G7', 'H8', 'I9',
];

/*
const cardContents = [
    '👽',
    '🐼',
    '🦁',
    '🌎',
    '🍎',
    '🎱',
    '🦉',
    '👻',
    '🍪'
];
*/

const Board = () => {
    const [level, setLevel] = useState(1);
    const [cards, setCards] = useState([]);
    const [flippedIndices, setFlippedIndices] = useState([]);

    useEffect(() => {
        initializeGame();
    }, [level]);

    useEffect(() => {
        if (flippedIndices.length === 2) {
            checkLevelCompletion();
        }
    }, [flippedIndices]);

    const initializeGame = () => {
        const totalCards = getTotalCardsForLevel(level);
        const levelCardContents = cardContents.slice(0, totalCards / 2);
        const duplicatedContents = levelCardContents.concat(levelCardContents);

        let shuffledContents;
        if (level === 7) {
            shuffledContents = proportionallyShuffleArray(duplicatedContents);
        } else {
            shuffledContents = shuffleArray(duplicatedContents);
        }

        const initialCards = shuffledContents.map((content) => ({
            content,
            isFlipped: false,
        }));

        setCards(initialCards);
        setFlippedIndices([]);
    };

    const getTotalCardsForLevel = (level) => {
        return level <= 7 ? level * 2 + 2 : 16;
    };

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const proportionallyShuffleArray = (array) => {
        const totalCount = array.length;
        const maxNumOfRepeats = 3;

        const repeats = {};
        array.forEach((card) => {
            const count = repeats[card] || 0;
            if (count < maxNumOfRepeats) {
                repeats[card] = count + 1;
            }
        });

        const shuffledArray = [];
        while (shuffledArray.length < totalCount) {
            for (const card of array) {
                if (repeats[card] > 0) {
                    shuffledArray.push(card);
                    repeats[card] -= 1;
                }
            }
        }

        return shuffleArray(shuffledArray);
    };

    const handleCardClick = (index) => {
        if (flippedIndices.length >= 2 || cards[index].isFlipped) return;

        setCards((prevCards) => {
            const newCards = [...prevCards];
            newCards[index].isFlipped = true;
            return newCards;
        });

        setFlippedIndices((prevIndices) => [...prevIndices, index]);
    };

    const checkLevelCompletion = () => {
        if (cards[flippedIndices[0]].content === cards[flippedIndices[1]].content) {
            setTimeout(() => {
                setCards((prevCards) => {
                    const newCards = prevCards.map((card, i) => {
                        if (i === flippedIndices[0] || i === flippedIndices[1]) {
                            return { ...card, isFlipped: true };
                        }
                        return card;
                    });
                    return newCards;
                });
                setFlippedIndices([]);

                if (allPairsFound()) {
                    if (level === 7) {
                        setLevel((prevLevel) => prevLevel + 1);
                        setCards([]); // Reset cards to show new ones for the next level
                    } else {
                        handleNextLevel();
                    }
                }
            }, 1000);
        } else {
            setTimeout(() => {
                setCards((prevCards) => {
                    const newCards = prevCards.map((card, i) => {
                        if (i === flippedIndices[0] || i === flippedIndices[1]) {
                            return { ...card, isFlipped: false };
                        }
                        return card;
                    });
                    return newCards;
                });
                setFlippedIndices([]);
            }, 1000);
        }
    };

    const handleNextLevel = () => {
        setLevel((prevLevel) => prevLevel + 1);
    };

    const allPairsFound = () => {
        return cards.filter((card) => !card.isFlipped).length === 0;
    };

    return (
        <div className="board">
            <div className='container-fluid'>
                <div className={`board-grid board-level-${level}`}>
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            content={card.content}
                            isFlipped={card.isFlipped}
                            onClick={() => handleCardClick(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Board;
