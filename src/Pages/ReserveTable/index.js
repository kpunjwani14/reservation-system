import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { ProfileForm } from '../Profile/ProfileForm';
import { AccountAlert } from './AccountAlert';
import { DinerDetails } from './DinerDetails';

export const ReserveTable = () => {

    return (
        <Box sx={{ width: '800px', bgcolor: 'background.paper', margin: "10px 80px" }}>
            <Box sx={{ my: 3, mx: 2 }}>
                <Grid container alignItems="center">
                    <Grid item xs>
                        <Typography gutterBottom variant="h5" component="div">
                            Finalize Reservation
                        </Typography>
                    </Grid>
                </Grid>
                {/* Prompt user to sign in/create an account if not logged in */}
                <AccountAlert />
            </Box>
            <Divider variant="middle" />
            <Box sx={{ m: 2 }}>
                <DinerDetails />
            </Box>
            <Divider variant="middle" />
            <Box sx={{ m: 2 }}>
                <ProfileForm buttonText={"Finish"} isReservationPage />
            </Box>
        </Box>
    )
}