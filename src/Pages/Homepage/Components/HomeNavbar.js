import React from 'react';
import { Container, Navbar, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'

export const HomeNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>

                <Navbar.Brand href="#">
                    <FontAwesomeIcon icon={faUtensils} />
                    <span style={{ margin: "5px" }}>ReserveTable</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse className="justify-content-end">
                    <Button style={{ marginRight: "8px" }} variant="primary">Sign in</Button>{' '}
                    <Button variant="outline-info">Sign up</Button>{' '}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}