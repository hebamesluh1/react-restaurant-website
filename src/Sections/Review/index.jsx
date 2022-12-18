import React from 'react'
import Title from '../../Components/Title';
import ReviewCard from '../../Components/RevCard';
import avatar1 from '../../assets/images/Ellipse 1.png';
import avatar2 from '../../assets/images/Ellipse 1 (1).png';
import './style.css'
import Container from '../../Components/container';
const Feedback = () => {
    return (
        <div className='reviews'>
            <Container>
                <Title 
                title="Reviews" 
                subtitle="words from our food lovers" />
            </Container>
            <div className="reviews__container">
                <ReviewCard
                    avatar={avatar1}
                    name="Alex andrina"
                    stars={5}
                    review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit."
                />

                <ReviewCard
                    avatar={avatar1}
                    name="Alex andrina"
                    stars={5}
                    review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit."
                />

                <ReviewCard
                    avatar={avatar2}
                    name="Alex andrina"
                    stars={5}
                    review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit."
                />
            </div>
        </div>
    )
}

export default Feedback