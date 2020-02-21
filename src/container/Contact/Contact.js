import React from "react";
import {Card} from "react-bootstrap";

export default function Contact() {
    return (
        <Card>
            <Card.Body>
                <p  className='text-center'>
                    <h3>Address</h3><br/>
                    ARCIS DESIGN 22-23,Ground Floor, Om Shubham Tower ,<br/> Faridabad , Haryana. <br/>Pin code: 121001

                   <br/> Email us at <a href="mailto:projects@arcisdesign.com">projects@arcisdesign.com</a>
                    <h3>Phone</h3>+911294876663 +918800443883 +919200002323
                </p>
              <div style={{
                width: '100%',
                height: '400px',
                backgroundColor: 'grey',
              }} id="map"></div>
            </Card.Body>
        </Card>
    );
}

