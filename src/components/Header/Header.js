import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import {Nav} from 'react-bootstrap'
import {withRouter} from 'react-router'

function Header(props) {
    const path = props.location.pathname;
    return (
        <div>
            {/*<div className='text-white' style={{*/}
            {/*    float: 'right'*/}
            {/*}}>*/}
            {/*    <FontAwesomeIcon icon={faInstagram} style={{*/}
            {/*        height: '40px',*/}
            {/*        width: '40px',*/}
            {/*        paddingRight: '10px'*/}
            {/*    }}/>*/}
            {/*    <FontAwesomeIcon icon={faGoogle} style={{*/}
            {/*        height: '40px',*/}
            {/*        width: '40px',*/}
            {/*        paddingRight: '10px'*/}
            {/*    }}/>*/}
            {/*    <FontAwesomeIcon icon={faFacebook} style={{*/}
            {/*        height: '40px',*/}
            {/*        width: '40px',*/}
            {/*        paddingRight: '10px'*/}
            {/*    }}/>*/}
            {/*</div>*/}
            {/*<img*/}
            {/*    alt=""*/}
            {/*    src={logo}*/}
            {/*    width="300"*/}
            {/*    height="200"*/}
            {/*    className="d-inline-block align-top"*/}
            {/*/>*/}

            <Navbar className="bg-dark-header" variant="dark" expand="lg">
                <Navbar.Brand href="/">
                    <img
                        src={process.env.PUBLIC_URL + "logo.jpg"}
                        width="300"
                        height="200"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto" variant="pills" activeKey={path}>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Nav.Link href="/team">Team</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                    {/*<Nav className="ml-auto">*/}
                    {/*    <Nav.Item><Link className={path === '/' ? 'nav-link active ' : 'nav-link'}*/}
                    {/*                    to="/">Home</Link></Nav.Item>*/}
                    {/*    <Nav.Item><Link className={path === '/projects' ? 'nav-link active' : 'nav-link'}*/}
                    {/*                    to="/projects">Projects</Link></Nav.Item>*/}
                    {/*    <Nav.Item><Link className={path === '/team' ? 'nav-link active' : 'nav-link'}*/}
                    {/*                    to="/team">Team</Link></Nav.Item>*/}
                    {/*    <Nav.Item><Link className={path === '/contact' ? 'nav-link active' : 'nav-link'}*/}
                    {/*                    to="/contact">Contact</Link></Nav.Item>*/}
                    {/*</Nav>*/}
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default withRouter(Header)
