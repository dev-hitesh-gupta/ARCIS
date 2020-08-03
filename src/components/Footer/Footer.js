import React from "react";
import {Col, Container, Row} from "react-bootstrap";

export default function Footer() {
    return (
        <footer style={{
            position: 'relative',
            bottom: 0,
            width: '100%',
            // height: '60px', /* Set the fixed height of the footer here */
            // lineHeight: '60px', /* Vertically center the text there */
            backgroundColor: '#e89f02',
            color: '#0c0c0c'
        }}>
            <Container>
                <Row className='pt-3'>
                    <Col>
                        <ul style={{listStyleType: 'none', fontSize: 28}}>
                            <li><strong>OUR SERVICES</strong></li>
                            <li>ARCHITECTURE</li>
                            <li>INTERIOR DESIGNING</li>
                            <li>LANDSCAPE</li>
                        </ul>
                    </Col>
                    <Col className='ml-2'>
                        <ul style={{listStyleType: 'none', fontSize: 28}}>
                            <li><strong>AREA OF EXPERTISE</strong></li>
                            <li>RESIDENTIAL</li>
                            <li>COMMERCIAL</li>
                            <li>CORPORATE</li>
                            <li>FACTORY</li>
                            <li>INSTITUTIONAL</li>
                        </ul>
                    </Col>
                    <Col className='ml-2'>
                        <ul style={{listStyleType: 'none', fontSize: 28}}>
                            <li><strong>CLIENTELE</strong></li>
                            <li></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
