import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { TextField, Stack, Link } from '@mui/material';
import axios from 'axios'
import Cookies from 'js-cookie'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};

export const Login = ({ isReservationPage,isAuth,setAuth }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
        setIsValid(true);
    };
    const handleClose = () => setOpen(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [isValid, setIsValid] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setEmailError(false);
        setPasswordError(false);

        if (!email) {
            setEmailError(true);
        }
        if (!password) {
            setPasswordError(true);
        }
        if (email && password) {
            //console.log(email, password);

            try{
                let result = await axios.post('http://localhost:3001/login',{email,password})
                toast.success('Logged in! Welcome '+result.data.name,{autoClose:10000})
                console.log(result.data)
                Cookies.set('access_token',result.data.token)
                Cookies.set('id',result.data.userId)
                console.log(Cookies.get('access_token'))
                handleClose()
                setIsValid(true);
                setAuth(true)
                
            }
            catch(err){
                console.log(err)
                //toast.error('Incorrect login! Please try again.',{autoClose:10000})
                setIsValid(false);
            }
            
        }
    }

    return (
        <div>
            {(isReservationPage &&  <div style={{ display: "inline-flex" }}></div>)
                || (<Button color="info" variant="contained" onClick={handleOpen}>Sign in</Button>)}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
                        Sign in
                    </Typography>
                    {!isValid && <p style={{ color: 'red' }}>Invalid credentials. Please try again.</p>}
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <Stack spacing={2}>
                            <TextField
                                required
                                id="outlined-required"
                                label="Email"
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                error={emailError}
                                mt={2}
                            />
                            <TextField
                                required
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                error={passwordError}
                            />
                            <Button type="submit" color="info" variant="contained">Sign in</Button>
                        </Stack>
                    </form>
                </Box>
            </Modal>
        </div >
    )
}