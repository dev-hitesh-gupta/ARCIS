import React from "react";
import {Card, Carousel, Col, Row} from 'react-bootstrap'
import {withRouter} from "react-router";

function Project() {
    return (
        <Card className ='border-dark'>
            <Card.Body>
                <Carousel className='p-5 pl-2 pr-2'>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/600x400?text=First slide&bg=373940"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/600x400?text=Second slide&bg=282c34"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/600x400?text=Third slide&bg=20232a"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div className='p-5 pl-2 pr-2'>
                <Row>
                    <Col className='m-3'> <Card.Title>PROJECT:-</Card.Title>
                        <Card.Text> Mr. Pradeep Sharma Residence</Card.Text>
                    </Col>
                    <Col className='m-3'> <Card.Title>LOCATION:-</Card.Title>
                        <Card.Text> Sector -21B , Faridabad</Card.Text>
                    </Col>
                </Row>
                <Row>
                    <Col className='m-3'> <Card.Title>AREA:-</Card.Title>
                        <Card.Text> 1000 Sq.yrd.</Card.Text>
                    </Col>
                    <Col className='m-3'> <Card.Title>TYPE OF BUILDING:-</Card.Title>
                        <Card.Text> Residential Building Ground , First & Second Floor</Card.Text>
                    </Col>
                </Row>
                <Row>
                    <Col className='m-3'> <Card.Title>SERVICES PROVIDED :-</Card.Title>
                        <Card.Text> •Architecture Services •Interior Design Services •Elevation Work</Card.Text>
                    </Col>
                </Row>
                </div>
            </Card.Body>

        </Card>
    );
}

export default withRouter(Project)
