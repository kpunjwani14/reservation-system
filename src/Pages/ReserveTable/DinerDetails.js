import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import Box from '@mui/material/Box';
import moment from 'moment'

export const DinerDetails = ({date,size,time}) => {
    const [highTrafficFee, sethighTrafficFee] = useState(4);
    
    return (
        <div>
            <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                Dining Details
            </Typography>
            <Stack direction="row" spacing={5}>
                <CalendarTodayOutlinedIcon />{moment(date + ' ' +time).format('MM/DD/YYYY')}
                <QueryBuilderIcon />{moment(date + ' ' +time).format('hh:mm a')}
                <PersonOutlineIcon />{size}
            </Stack>
            <br />
            <Typography sx={{ fontSize: 16 }} color="text.secondary">
                Cost
            </Typography>
            <Stack spacing={2}>
                <Typography variant="body2">
                    Hold Fee: $5
                    <br />
                    {`High Traffic Day Fee: $${0}`}
                </Typography>
                <Typography variant="h6" component="div">
                    {`Total: $${5 *parseInt(size)+5}`}
                </Typography>
            </Stack>
        </div >
    )
}