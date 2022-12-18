import React from "react";
import BlogsCard from "../../Components/BlogCard";
import Container from "../../Components/container";
import food3 from '../../assets/images/unsplash_ThLVnKdeH1k (2).png';
import food2 from '../../assets/images/DirtCandy-0242 (2).png';
import food1 from '../../assets/images/hcmp33562_1459402.png';
import './style.css';
class Blogs extends React.Component {
    render() { 
        return (
            <Container>
                <div className="blogs">
                    <BlogsCard 
                    img={food1}
                    title='Cooking Dining Experience '
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin'
                    />
                    <BlogsCard 
                    img={food2}
                    title='Cooking Dining Experience '
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin'
                    imgLast
                    />
                    <BlogsCard 
                    img={food3}
                    title='Cooking Dining Experience '
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin'
                    />
                </div>
            </Container>
        );
    }
}

export default Blogs;