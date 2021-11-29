import React, { useState } from 'react';
import {
    Card,
    Typography,
    CardContent,
    CardActions,
    Button,
    Stack,
    FormControlLabel,
    Checkbox
} from '@mui/material';
import TableRestaurantOutlinedIcon from '@mui/icons-material/TableRestaurantOutlined';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

export const AvailableTables = ({ tables }) => {
    const [selectedTables, setSelectedTables] = useState([]);

    const handleSelectedTables = (event, tables) => {
        setSelectedTables(tables);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedTables) {
            console.log(selectedTables);
        }
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Card>
                <CardContent>
                    <Typography variant="h6" component="div">
                        Available Tables
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1.5 }}>
                        You may need to select a combination of tables
                    </Typography>

                    <Stack direction="row" spacing={2}>
                        <form onSubmit={handleSubmit}>
                            {tables.map((x) => (
                                <FormControlLabel
                                    key={uuidv4()}
                                    label={x}
                                    control={
                                        <Checkbox
                                            key={uuidv4()}
                                            size="medium"
                                            icon={<TableRestaurantOutlinedIcon />}
                                            checkedIcon={<TableRestaurantIcon />}
                                        />
                                    }
                                />
                            ))}

                            <CardActions style={{ justifyContent: 'center' }}>
                                <Button type="submit" size="small">Let's go</Button>
                            </CardActions>
                        </form>
                    </Stack>
                </CardContent>
            </Card>
        </div >
    )
}