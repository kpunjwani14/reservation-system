import React, { useState } from 'react';
import Cookies from 'js-cookie'
//import Redirect from 'react-router-dom'
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
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

export const AvailableTables = ({ tables, userSpecifications }) => {
    const [checked, setChecked] = useState([]);
    const [redirect,setRedirect] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(tables.find(x => x.id == checked[0]));
        

        if (checked && checked.length < 1) {
            toast.error('Please select a table to proceed');
        } else {
            // Redirect to '/reservation' with userSpecifications prop (date, time, size)
            let totTables = tables.filter(t =>{
                return tables.find(t => checked.includes(t.id) ) !=null
            })
            console.log(totTables)
            console.log(Cookies.get('id'))
            setRedirect(true)
            
        }
    }

    return (
       redirect? <Redirect to={`/reservation?date=${userSpecifications.date}&time=${userSpecifications.time}&size=${userSpecifications.size}`}/>: <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Card>
                <CardContent>
                    <Typography variant="h6" component="div">
                        Available Tables
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1.5 }}>
                        You may need to select a combination of tables
                    </Typography>
                    <Stack spacing={2}>
                        <form onSubmit={handleSubmit}>
                            {tables.map(table => (
                                <FormControlLabel
                                    key={table.id}
                                    label={table.label}
                                    control={
                                        <Checkbox
                                            size="medium"
                                            icon={<TableRestaurantOutlinedIcon />}
                                            checkedIcon={<TableRestaurantIcon />}
                                            checked={checked.includes(table.id)}
                                            onChange={() => {
                                                let found = checked.includes(table.id);
                                                if (found) {
                                                    setChecked(checked.filter(x => x !== table.id));
                                                } else {
                                                    setChecked([...checked, table.id]);
                                                }
                                            }}
                                        />
                                    }
                                />
                            ))}
                            <CardActions style={{ justifyContent: 'center' }}>
                                <Button type="submit">Let's go</Button>
                            </CardActions>
                        </form>
                    </Stack>
                </CardContent>
            </Card>
        </div >
    )
}