import React from 'react'

import './style.css'
const BlogsCard = ({ img, title, text, imgLast }) => {
    return (
        <div className='blogs__card'>
            <img src={img} alt="img" style={{ order: imgLast ? 2 : -1 }} />
            <div className="blogs__card__content">
                <h4 className="title">{title}</h4>
                <p>{text}</p>
                <button>Read more</button>
            </div>
        </div>
    )
}

export default BlogsCard