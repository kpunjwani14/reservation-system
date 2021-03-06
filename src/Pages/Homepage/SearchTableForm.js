import { Formik } from 'formik';
import { React, useState } from 'react';
import { Card } from 'react-bootstrap';
import table from '../../tableimg.jpg';
import DateAdapter from '@mui/lab/AdapterDateFns';
import axios from 'axios'
import {
    LocalizationProvider,
    DatePicker,
    TimePicker
} from '@mui/lab';
import {
    Select,
    FormControl,
    MenuItem,
    InputLabel,
    Box,
    Stack,
    TextField,
    Button
} from '@mui/material';
import moment from 'moment';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';
import { AvailableTables } from '../AvailableTables';

export const SearchTableForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [tables, setTables] = useState([]);
    const [userSpecifications, setUserSpecifications] = useState({});

    const init = {
        date: null,
        time: null,
        size: 2
    }

    const handleSubmit = async (values) => {
        const momentDate = moment(values.date).format('YYYY/M/D')
        const momentTime = moment(values.time).format('HH:mm')
        const searchDTO = {
            date: momentDate,
            time: momentTime,
            size: values.size
        }
        console.log('searchDTO:', searchDTO);
        setUserSpecifications(searchDTO);

        const errors = handleValidation(values);
        if (Object.keys(errors).length < 1) {
            // based on the input (searchDTO), make a call to the db and display available tables
            let dbTables = [
                { id: 1, label: 1 },
                { id: 2, label: 2 },
                { id: 3, label: 2 },
                { id: 4, label: 4 },
                { id: 5, label: 6 },
                { id: 6, label: 8 }
            ];
            try{
                //let result = await axios.get(`http://localhost:3001/reservationSlots?date=${momentDate}&time=${momentTime}&size=${searchDTO.size}`)
                //console.log(result.data)
                for (var i = dbTables.length - 1; i >= 0; i--) {
                    
                    if (dbTables[i].label  < values.size) { 
                        dbTables.splice(i, 1);
                    }
                }
                console.log(dbTables)
                
            }
            catch(err){
                console.log(err)
            }
            setTables(dbTables);
            setIsSubmitted(true);
        } else {
            setIsSubmitted(false);
        }
    }

    const handleValidation = (values) => {
        const errors = {};
        const today = new Date();
        const timeThreshold = today.setHours(today.getHours() + 1);

        if (!values.date) {
            errors.date = 'Must select a date';
        }
        if (!values.time) {
            errors.time = 'Must select a time';
        }
        if (values.date && values.time) {
            const dateTime = moment(new Date(values.date)).format('MM/DD/YYYY') + ' ' + moment(new Date(values.time)).format('hh:mm a')
            if (new Date(dateTime) < new Date(timeThreshold)) {
                errors.pastTime = 'Can only reserve tables an hour from now';
            }
        }
        if (!values.size) {
            errors.size = 'Must select party size';
        }

        const missingValues = Object.values(errors);
        if (missingValues.length) {
            const errorMessage = <>{missingValues.map((x) => <div key={uuidv4()}>{x}</div>)}</>
            toast.error(errorMessage);
        }

        return errors;
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Stack spacing={5} direction="row">
                <Card style={{ width: '32rem' }}>
                    <Card.Img variant="top" src={table} />
                    <Card.Body>
                        <Card.Title>Reserve a table</Card.Title>
                        <Card.Text>
                            Searching for a table made quick and easy
                        </Card.Text>
                    </Card.Body>

                    <Card.Body>
                        <Formik
                            initialValues={init}
                            onSubmit={handleSubmit}
                        >
                            {props => (
                                <div>
                                    <Stack spacing={2}>
                                        <LocalizationProvider dateAdapter={DateAdapter}>
                                            <DatePicker
                                                name="date"
                                                label="Date"
                                                value={props.values.date}
                                                onChange={x => props.setFieldValue('date', x)}
                                                renderInput={(params) => <TextField {...params} />}
                                                disablePast
                                            />
                                            <TimePicker
                                                name="time"
                                                label="Time"
                                                value={props.values.time}
                                                onChange={x => props.setFieldValue('time', x)}
                                                renderInput={(params) => <TextField {...params} />}
                                                minutesStep={30}
                                            />
                                        </LocalizationProvider>
                                        <Box sx={{ minWidth: 120 }}>
                                            <FormControl fullWidth>
                                                <InputLabel id="sizeLabel">Party Size</InputLabel>
                                                <Select
                                                    labelId="sizeLabel"
                                                    name="size"
                                                    value={props.values.size}
                                                    label="Party Size"
                                                    onChange={props.handleChange}
                                                >
                                                    <MenuItem value={2}>Two</MenuItem>
                                                    <MenuItem value={4}>Four</MenuItem>
                                                    <MenuItem value={6}>Six</MenuItem>
                                                    <MenuItem value={8}>Eight</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                        <Button onClick={props.handleSubmit}>Find a table</Button>
                                    </Stack>
                                </div>
                            )}
                        </Formik>

                    </Card.Body>
                </Card>
                {isSubmitted && <AvailableTables tables={tables} userSpecifications={userSpecifications} />}

            </Stack>
        </div>
    )
}