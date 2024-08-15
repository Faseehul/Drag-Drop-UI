import React, { useState } from 'react';
import Card from './Card';
import './Canvas.css';



const Canvas = () => {
    const [cards, setCards] = useState([]);
    const [arrows, setArrows] = useState([]);

    const addCard = () => {
        const newCard = {
            id: cards.length + 1,
            x: 50,
            y: 50,
            width: 150,
            height: 100,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            fullText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        };
        setCards([...cards, newCard]);
    };

    const updateCard = (updatedCard) => {
        setCards(cards.map(card => card.id === updatedCard.id ? updatedCard : card));
    };

    const connectCards = (fromCard, toCard) => {
        setArrows([...arrows, { from: fromCard, to: toCard }]);
    };

    return (
        <div className="canvas">
            <button onClick={addCard}>Add Card</button>
            {cards.map(card => (
                <Card 
                    key={card.id} 
                    card={card} 
                    updateCard={updateCard} 
                    connectCards={connectCards} 
                />
            ))}
            {arrows.map((arrow, index) => (
                <svg key={index} className="arrow">
                    <line 
                        x1={arrow.from.x + arrow.from.width / 2} 
                        y1={arrow.from.y + arrow.from.height / 2} 
                        x2={arrow.to.x + arrow.to.width / 2} 
                        y2={arrow.to.y + arrow.to.height / 2} 
                        stroke="black" 
                    />
                </svg>
            ))}
        </div>
    );
};

export default Canvas;

