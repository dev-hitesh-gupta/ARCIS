import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";

export default function Team() {
    return (
        <Container className="text-center" fluid>
            <Row>
                <Col sm={6}>
                    <Image src={process.env.PUBLIC_URL + '/Manish.jpg'} className='img-max m-5' fluid roundedCircle/>
                    <p className='text-center text-white'>
                        <strong>Ar. MANISH GUPTA (M.Arch & B.Arch)</strong><br/>
                        Founding Partner<br/><br/>

                        Fellow, Indian Institute of Architects<br/>
                        Fellow, Indian Institute of Town Planners<br/><br/>

                        Ar. MANISH GUPTA (M.Arch & B.Arch) & Ar. VIRAT JAL0TA(B.Arch & B.Sc Interiors)
                        are the Joint Principal Architects. The firm works at multiple scales and with various
                        organizations
                        right from private clients to corporate & NGOs. This allows them to experiment and diversify
                        work:
                        master planning, architectural & interior projects, such as luxury villas, high end residences
                        and
                        unique offices, as well as hospitality & institutional projects , Industries & several
                        charitable
                        works. ARCIS DESIGN approach is to re-connect architecture with nature, make optimum use of
                        space,
                        natural materials, lighting & landscape to reinvent and transform living environments and urban
                        spaces. The firm strives to create design that inspires, approaching each project, regardless of
                        size & scale, with an understanding that architecture has a unique power to influence lifestyle
                        and
                        society. Their forte is attention to details and customization. Honesty to design, client
                        satisfaction, and sustainability are the driving forces, along with the ability to constantly
                        explore & evolve. They are dedicated to unique design approaches adapted to each project, and
                        achieving a balance between functionality & aesthetics, context, climate, material, cost &
                        time-frame. </p>
                </Col>
                <Col sm={6}>
                    <Image src={process.env.PUBLIC_URL + '/Virat.jpg'} className='img-max m-5' fluid roundedCircle/>
                    <p className='text-center text-white'>
                        <strong>Ar. VIRAT JAL0TA(B.Arch & B.Sc Interiors)</strong><br/>
                        Founding Partner<br/><br/>

                        Fellow, Indian Institute of Architects<br/>
                        Fellow, Indian Institute of Town Planners<br/><br/>

                        Ar. MANISH GUPTA (M.Arch & B.Arch) & Ar. VIRAT JAL0TA(B.Arch & B.Sc Interiors)
                        are the Joint Principal Architects. The firm works at multiple scales and with various
                        organizations
                        right from private clients to corporate & NGOs. This allows them to experiment and diversify
                        work:
                        master planning, architectural & interior projects, such as luxury villas, high end residences
                        and
                        unique offices, as well as hospitality & institutional projects , Industries & several
                        charitable
                        works. ARCIS DESIGN approach is to re-connect architecture with nature, make optimum use of
                        space,
                        natural materials, lighting & landscape to reinvent and transform living environments and urban
                        spaces. The firm strives to create design that inspires, approaching each project, regardless of
                        size & scale, with an understanding that architecture has a unique power to influence lifestyle
                        and
                        society. Their forte is attention to details and customization. Honesty to design, client
                        satisfaction, and sustainability are the driving forces, along with the ability to constantly
                        explore & evolve. They are dedicated to unique design approaches adapted to each project, and
                        achieving a balance between functionality & aesthetics, context, climate, material, cost &
                        time-frame. </p>

                </Col>
            </Row>
            <Row><h2 className='text-center m-5 text-white'><strong>Team member</strong></h2></Row>
            <Row>
                <Col sm={2} className='text-center text-white m-5'>
                    <Image src="holder.js/100x100" fluid roundedCircle/>
                    <br/>
                    <strong>Team 1</strong><br/>
                    Founding Partner
                </Col>
                <Col sm={2} className='text-center text-white m-5'>
                    <Image src="holder.js/100x100" fluid roundedCircle/>
                    <br/>
                    <strong>Team 1</strong><br/>
                    Founding Partner
                </Col>
                <Col sm={2} className='text-center text-white m-5'>
                    <Image src="holder.js/100x100" fluid roundedCircle/>
                    <br/>
                    <strong>Team 1</strong><br/>
                    Founding Partner
                </Col>
                <Col sm={2} className='text-center text-white m-5'>
                    <Image src="holder.js/100x100" fluid roundedCircle/>
                    <br/>
                    <strong>Team 1</strong><br/>
                    Founding Partner
                </Col></Row>
        </Container>
    );
}
