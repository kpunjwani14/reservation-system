import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField, Stack } from '@mui/material';

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


export const Login = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [isValid, setIsValid] = useState(true);

    const handleSubmit = (e) => {
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
            console.log(email, password);

            // call to the db -> if credentials are invalid
            setIsValid(false);
        }
    }

    return (
        <div>
            <Button variant="contained" onClick={handleOpen}>Sign in</Button>
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