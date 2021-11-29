import React from 'react';
import {
    Box,
    Button,
    Typography,
    Modal
} from '@mui/material';
import { ProfileForm } from '../Profile/ProfileForm';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow: 'scroll',
    height: '85%',
    display: 'block'
};

export const Register = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button variant="outlined" color="info" onClick={handleOpen}>Sign up</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
                        Sign up
                    </Typography>
                    <ProfileForm buttonText={"Sign up"} isRegisterModal />
                </Box>
            </Modal>
        </div>
    )
}