import React from "react";
import {CardDeck} from 'react-bootstrap'
import ProjectCard from "./ProjectCard";

const imageUrl = `${process.env.PUBLIC_URL}/car-image.jpg`;

const projects = [{
    title: 'Card Title',
    text: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
    image: imageUrl,
    link: '/project/1'
}]

export default class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projectCards: [],
        };
    }

    setCard() {
        const card = <ProjectCard key={this.state.i} title='Card Title' text={`  Some quick example text to build on the card title and make
                                 up the bulk of
                                 the card's content.`} image={imageUrl}
                                  link='/project/1'/>
        setTimeout(() => {
            this.state.projectCards.push(card)
            this.setState({
                i: ++this.state.i,
            })
        }, 500);

    }

    componentDidMount() {
        this.setCard();
    }

    render() {
        return (<CardDeck style={{
            height: this.state.projectCards.length === 0 ? '450px' : '100%'
        }} className='p-5'>
            {this.state.projectCards}
        </CardDeck>);
    }
}
