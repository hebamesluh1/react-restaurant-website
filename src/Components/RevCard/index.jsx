import React from 'react'
import './style.css';

const ReviewCard = ({ avatar, name, stars, review }) => {
    return (
        <div className='review-card'>
            <div className="review-card__header">
                <img className="avatar-1" src={avatar} alt={name} />
                <div>
                    <h4>{name}</h4>
                    <p>{"⭐".repeat(stars)}</p>
                </div>
            </div>
            <p className='review'>"{review}"</p>
        </div>
    )
}

export default ReviewCard