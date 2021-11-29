import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';

export const Rewards = () => {
    const [points, setPoints] = useState(0);

    useEffect(() => {
        // make a call to the db to get points
        setPoints(5);
    }, []);

    return (
        <div>
            <Typography>Rewards</Typography>
            <Typography variant="body2" style={{ margin: "5px 0px 12px 0px" }} >
                You have {points}/100 Points.<br />
                {100 - points} Points until next $5 Reward.
            </Typography>
        </div>
    )
}