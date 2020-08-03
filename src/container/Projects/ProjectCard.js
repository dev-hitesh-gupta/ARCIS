import React from "react";
import {Card} from 'react-bootstrap'
import {Link} from "react-router-dom";
import Radium, {StyleRoot} from "radium";
import {slideInRight} from "react-animations";

const styles = {
    slideInRight: {
        animation: 'x 1s',
        animationName: Radium.keyframes(slideInRight, 'slideInRight')
    }
}
export default function ProjectCard(props) {
    return (
        <StyleRoot>
            <div style={styles.slideInRight}>
                <Card className='m-3' style={{width: '25rem',}}>
                    <Link to={props.link}>
                        <Card.Img variant="top" src={props.image}/>
                        <Card.Body>
                            <Card.Title>{props.title}</Card.Title>
                            <Card.Text>
                                {props.text}
                            </Card.Text>
                        </Card.Body></Link>
                </Card></div>
        </StyleRoot>);
}

