import React from "react";
import Title from "../../Components/Title";
import Container from './../../Components/container';
import Button from './../../Components/Button';
import img from './Untitled design (6) 1.png';
import './style.css';
class About extends React.Component {
    render() { 
        return ( 
            <Container>
                <div className="about-us">
                    <div>
                        <Title 
                        title='About US'
                        subtitle='Discover The Taste Of World Class Vegan Dishes From The Kitchen Of Go Green Dine'>
                        </Title>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolorum sed tenetur soluta tempora odio facere nisi delectus non quaerat nostrum impedit obcaecati necessitatibus, iusto veritatis praesentium exercitationem dolores, animi voluptate quae dolorem dignissimos commodi? Modi a accusamus molestiae similique at amet repudiandae! Aperiam dolorem eos nulla quia saepe similique ipsa et accusantium dolor, unde laboriosam, blanditiis suscipit. Accusamus, amet recusandae dicta laudantium veniam magni animi numquam quis unde exercitationem ullam ipsam sequi dolore necessitatibus beatae temporibus asperiores, consequuntur officiis.</p>

                        <Button>Read more</Button>
                    </div>
                    <div>
                        <img src={img} alt="img" />
                    </div>
            </div>
            </Container>
            
        );
    }
}
export default About;