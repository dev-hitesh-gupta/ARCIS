import React from "react";
import { Container, Row} from "react-bootstrap";

export default function Footer() {
  return (
      <footer style={{
        position: 'relative',
        bottom: 0,
        width: '100%',
        height: '60px', /* Set the fixed height of the footer here */
        lineHeight: '60px', /* Vertically center the text there */
        backgroundColor: '#0c0c0c',
          color:'#fff'
      }}>
          <Container>
              <Row>
                  this is footer
              </Row>
          </Container>
      </footer>
  );
}
