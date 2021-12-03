import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { ProfileForm } from '../Profile/ProfileForm';
import { AccountAlert } from './AccountAlert';
import { DinerDetails } from './DinerDetails';
import {useLocation} from "react-router-dom";
import axios from 'axios'
import Cookies from 'js-cookie'

export const ReserveTable = () => {
    const search = useLocation().search
    const date = new URLSearchParams(search).get('date'); 
    const size = new URLSearchParams(search).get('size'); 
    const time = new URLSearchParams(search).get('time'); 
    const [profile,setProfile] = React.useState({})
    console.log(date,size,time)
    React.useEffect(()=>{
        async function getData(){
            let result = await axios.get('http://localhost:3001/user?id='+Cookies.get('id'))
            console.log(result)
            setProfile(result.data)
        }
        getData()
    },[])
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
                <DinerDetails date={date} size={size} time={time} />
            </Box>
            <Divider variant="middle" />
            <Box sx={{ m: 2 }}>
                <ProfileForm  profileInfo ={{email:profile.Email,name:profile.Name,mailing:profile.Address,mailingCity:profile.City,mailingState:profile.State,zip:profile.ZipCode, cardNumber:profile.CreditCard,exp:profile.Expiration,code:profile.SecCode,phone:profile.PhoneNumber}} buttonText={"Finish"} isReservationPage />
            </Box>
        </Box>
    )
}