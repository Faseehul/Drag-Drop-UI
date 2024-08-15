import React, { useState } from 'react';
import './Card.css';


const Card = ({ card, updateCard, connectCards }) => {
    const [showMore, setShowMore] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [isResizing, setIsResizing] = useState(false);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        e.stopPropagation();
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            updateCard({
                ...card,
                x: e.clientX - card.width / 2,
                y: e.clientY - card.height / 2
            });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        setIsResizing(false);
    };

    const handleResizeMouseDown = (e) => {
        setIsResizing(true);
        e.stopPropagation();
    };

    const handleResizeMouseMove = (e) => {
        if (isResizing) {
            updateCard({
                ...card,
                width: e.clientX - card.x,
                height: e.clientY - card.y
            });
        }
    };

    return (
        <div 
            className="card" 
            style={{
                left: card.x, 
                top: card.y, 
                width: card.width, 
                height: card.height
            }}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            <div className="card-header" onMouseDown={handleMouseDown}>
                <div className="text">
                    {showMore ? card.fullText : card.text}
                </div>
                <button onClick={() => setShowMore(!showMore)}>
                    {showMore ? 'Show Less' : 'Show More'}
                </button>
            </div>
            <div className="resize-handle" onMouseDown={handleResizeMouseDown} />
        </div>
    );
};

export default Card;
