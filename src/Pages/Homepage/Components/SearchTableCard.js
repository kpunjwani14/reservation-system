import { Formik } from 'formik';
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import table from '../../../tableimg.jpg'
import DateAdapter from '@mui/lab/AdapterMoment';
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

export const SearchTableCard = () => {
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [size, setSize] = React.useState('');

    const handleChange = (event) => {
        setSize(event.target.value);
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Card style={{ width: '35rem' }}>
                <Card.Img variant="top" src={table} />
                <Card.Body>
                    <Card.Title>Reserve a table</Card.Title>
                    <Card.Text>
                        Searching for a table made quick and easy
                    </Card.Text>
                </Card.Body>

                <Card.Body>
                    <Formik>
                        <Stack spacing={2}>
                            <LocalizationProvider dateAdapter={DateAdapter}>
                                <DatePicker
                                    label="Date"
                                    value={date}
                                    onChange={(newValue) => {
                                        setDate(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                                <TimePicker
                                    label="Time"
                                    value={time}
                                    onChange={(newValue) => {
                                        setTime(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Party Size</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={size}
                                        label="Party Size"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={2}>Two</MenuItem>
                                        <MenuItem value={4}>Four</MenuItem>
                                        <MenuItem value={6}>Size</MenuItem>
                                        <MenuItem value={8}>Eight</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Button href="#text-buttons">Let's Go!</Button>
                        </Stack>
                    </Formik>
                </Card.Body>
            </Card>
        </div >
    )
}