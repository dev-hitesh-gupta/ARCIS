import React from "react";
import {
  Link
} from "react-router-dom";
import {Nav} from 'react-bootstrap'
import logo from './logo.jpg';
import {withRouter} from 'react-router'
function Header(props) {
    const path = props.location.pathname;
  return (
        <div>
            <img
                alt=""
                src={logo}
                width="300"
                height="200"
                className="d-inline-block align-top"
            />
            <Nav className="nav nav-pills pb-3 justify-content-end">
              <Nav.Item><Link className={path  === '/' ? 'nav-link active ' : 'nav-link'} to="/">Home</Link></Nav.Item>
              <Nav.Item><Link className={path  === '/projects' ? 'nav-link active' : 'nav-link'} to="/projects">Projects</Link></Nav.Item>
              <Nav.Item><Link className={path  === '/team' ? 'nav-link active' : 'nav-link'} to="/team">Team</Link></Nav.Item>
              <Nav.Item ><Link className={path  === '/contact' ? 'nav-link active' : 'nav-link'} to="/contact">Contact</Link></Nav.Item>
            </Nav>
        </div>
  );
}

export default withRouter(Header)
