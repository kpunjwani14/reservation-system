import React, { useState } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { Login } from '../../Login';
import { Register } from '../../Register';
import Stack from '@mui/material/Stack';
import { ProfileIcon } from '../../Profile/ProfileIcon';

export const HomeNavbar = () => {
    const [auth, setAuth] = useState(true);

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">
                    <FontAwesomeIcon icon={faUtensils} />
                    <span style={{ margin: "5px" }}>ReserveTable</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                {auth
                    ? <ProfileIcon auth={auth} setAuth={setAuth} />
                    : <Navbar.Collapse className="justify-content-end">
                        <Stack spacing={1} direction="row">
                            <Login />
                            <Register />
                        </Stack>
                    </Navbar.Collapse>
                }
            </Container>
        </Navbar >
    )
}