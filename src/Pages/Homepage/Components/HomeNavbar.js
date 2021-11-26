import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { Login } from '../../Login';
import { Register } from '../../Register';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

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
                    <Stack spacing={1} direction="row">
                        <Login />
                        <Register />
                    </Stack>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}