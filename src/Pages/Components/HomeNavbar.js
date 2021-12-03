import React, { useState,useEffect } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { Login } from '../Login';
import { Register } from '../Register';
import Stack from '@mui/material/Stack';
import { ProfileIcon } from './ProfileIcon';
import axios from 'axios'
import Cookies from 'js-cookie'

export const HomeNavbar = ({auth,setAuth}) => {
    
   
   
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">
                    <FontAwesomeIcon icon={faUtensils} />
                    <span style={{ margin: "5px" }}>ReserveTable</span>
                </Navbar.Brand>
                
                {auth
                    ? <ProfileIcon auth={auth} setAuth={setAuth} />
                    : (
                        <>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse className="justify-content-end">
                                <Stack spacing={1} direction="row">
                                    <Login auth ={auth} setAuth = {setAuth} />
                                    <Register />
                                </Stack>
                            </Navbar.Collapse>
                        </>
                    )
                }
            </Container>
        </Navbar >
    )
}