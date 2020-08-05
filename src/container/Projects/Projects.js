import React from "react";
import {CardDeck} from 'react-bootstrap'
import ProjectCard from "./ProjectCard";

const imageUrl = `${process.env.PUBLIC_URL}/car-image.jpg`;

const projects = [{
    title: 'Card Title',
    text: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
    image: imageUrl,
    link: '/project/1'
},{
    title: 'Card Title',
    text: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
    image: imageUrl,
    link: '/project/1'
},{
    title: 'Card Title',
    text: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
    image: imageUrl,
    link: '/project/1'
},{
    title: 'Card Title',
    text: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
    image: imageUrl,
    link: '/project/1'
},{
    title: 'Card Title',
    text: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
    image: imageUrl,
    link: '/project/1'
}]

export default class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projectCards: projects.map((project, index) => {
                return <ProjectCard key={index} title={project.title} text={project.text} image={project.image}
                                    link={project.link}/>
            }),
        };
    }

    render() {
        return (<CardDeck className='p-5'>
            {this.state.projectCards}
        </CardDeck>);
    }
}
