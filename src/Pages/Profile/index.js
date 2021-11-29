import React, { useEffect, useState } from 'react';
import { ProfileForm } from './ProfileForm';
import {
    Box,
    Typography,
    Modal,
    MenuItem
} from '@mui/material';
import { Rewards } from './Rewards';

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

export const Profile = ({ closeMenu }) => {
    const [profileInfo, setProfileInfo] = useState({});
    // useEffect(() => {
    //     // get data from the db if existing user
    //     const dbInfo = {
    //         email: '1',
    //         password: '1',
    //         fullName: 'k',
    //         phone: '1',
    //         mailing: '1',
    //         mailingCity: '1',
    //         mailingState: '1',
    //         mailingZip: '1',
    //         isBillingSame: false,
    //         card: '1',
    //         exp: '1',
    //         code: '1',
    //         billing: '1',
    //         billingCity: '1',
    //         billingState: '1',
    //         billingZip: '1',
    //     }
    //     setProfileInfo(dbInfo);
    // }, [])

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        closeMenu();
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

    return (
        <div>
            <MenuItem onClick={handleOpen}>
                Profile
            </MenuItem>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
                        My Info
                    </Typography>
                    <Rewards />
                    <ProfileForm buttonText={"Save"} profileInfo={profileInfo} />
                </Box>
            </Modal>
        </div>
    )
}