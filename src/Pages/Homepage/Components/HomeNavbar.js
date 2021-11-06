import React from 'react';
import { Container, Navbar, Button } from 'react-bootstrap';

export const HomeNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>

                <Navbar.Brand href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-calendar-check" viewBox="0 0 20 20">
                        <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                    </svg>
                    ReserveTable
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