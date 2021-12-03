import React from 'react';
import {
    Divider,
    Alert
} from '@mui/material';
import { Login } from '../Login';
import { Register } from '../Register';

export const AccountAlert = () => {
    return (
        <div>
            <Alert icon={false} severity="info">
                <Login isReservationPage />
                
                <Register isReservationPage />
                
                Minimum of $10 extra will be charged to those that do not show up to their reservation
                

            </Alert>
        </div>
    )
}