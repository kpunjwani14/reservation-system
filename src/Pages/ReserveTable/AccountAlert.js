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
                <Divider>
                    OR
                </Divider>
                <Register isReservationPage />
            </Alert>
        </div>
    )
}