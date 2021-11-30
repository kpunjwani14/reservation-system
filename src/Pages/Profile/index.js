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

    useEffect(() => {
        // get data from the db if existing user
        const dbInfo = {
            email: 'k@test.com',
            password: '123',
            fullName: 'k',
            phone: '(111) 111-1111',
            mailing: '123',
            mailingCity: 'Paris',
            mailingState: 'Texas',
            mailingZip: '11111',
            isBillingSame: false,
            card: '1234123412341234',
            exp: '10/25',
            code: '123',
            billing: '123',
            billingCity: 'London',
            billingState: 'Arkansas',
            billingZip: '11111',
        }
        setProfileInfo(dbInfo);
    }, [])

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