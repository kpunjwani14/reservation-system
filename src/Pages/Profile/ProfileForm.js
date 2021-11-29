import React from 'react';
import { TextField, Stack } from '@mui/material';
import { Formik } from 'formik';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const ProfileForm = ({ buttonText }) => {
    const init = {
        email: '',
        password: '',
        fullName: '',
        phone: '',
        mailing: '',
        mailingCity: '',
        mailingState: '',
        mailingZip: '',
        isBillingSame: true,
        card: '',
        exp: '',
        code: '',
        billing: '',
        billingCity: '',
        billingState: '',
        billingZip: '',
    }

    const handleSubmit = (values) => {
        console.log(values);
    }

    return (
        <div>
            <Formik
                initialValues={init}
                onSubmit={handleSubmit}
            // validationSchema={SignupSchema}
            >
                {props => (
                    <div>
                        <Stack spacing={2}>
                            <Typography id="modal-modal-description">
                                Personal Info
                            </Typography>
                            <TextField

                                name="fullName"
                                label="Name"
                                mt={2}
                                value={props.values.name}
                                onChange={props.handleChange}
                            />
                            <TextField

                                name="email"
                                label="Email"
                                value={props.values.email}
                                onChange={props.handleChange}
                            />
                            <TextField

                                name="password"
                                type="password"
                                label="Password"
                                value={props.values.password}
                                onChange={props.handleChange}
                            />
                            <TextField

                                name="phone"
                                label="Phone Number"
                                value={props.values.phone}
                                onChange={props.handleChange}
                            />
                            <Typography id="modal-modal-description">
                                Address
                            </Typography>
                            <TextField

                                name="mailing"
                                label="Mailing Address"
                                value={props.values.mailing}
                                onChange={props.handleChange}
                            />
                            <TextField

                                name="mailingCity"
                                label="City"
                                value={props.values.mailingCity}
                                onChange={props.handleChange}
                            />
                            <TextField

                                name="mailingState"
                                label="State"
                                value={props.values.mailingState}
                                onChange={props.handleChange}
                            />
                            <TextField

                                name="mailingZip"
                                label="Zip Code"
                                value={props.values.mailingZip}
                                onChange={props.handleChange}
                            />

                            <Typography id="modal-modal-description">
                                Preferred Payment
                            </Typography>
                            <TextField

                                name="card"
                                label="Card Number"
                                value={props.values.card}
                                onChange={props.handleChange}
                            />
                            <TextField

                                name="exp"
                                label="Exp Date (MM/YY)"
                                value={props.values.exp}
                                onChange={props.handleChange}
                            />
                            <TextField

                                name="code"
                                label="Security Code"
                                value={props.values.code}
                                onChange={props.handleChange}
                            />
                            <FormControlLabel
                                control={<Checkbox defaultChecked />}
                                name="isBillingSame"
                                label="Billing same as mailing"
                                value={props.values.isBillingSame}
                                onChange={props.handleChange}
                            />
                            {!props.values.isBillingSame &&
                                <>
                                    <TextField

                                        name="billing"
                                        label="Billing Address"
                                        value={props.values.billing}
                                        onChange={props.handleChange}
                                    />
                                    <TextField

                                        name="billingCity"
                                        label="City"
                                        value={props.values.billingCity}
                                        onChange={props.handleChange}
                                    />
                                    <TextField

                                        name="billingState"
                                        label="State"
                                        value={props.values.billingState}
                                        onChange={props.handleChange}
                                    />
                                    <TextField

                                        name="billingZip"
                                        label="Zip Code"
                                        value={props.values.billingZip}
                                        onChange={props.handleChange}
                                    />
                                </>
                            }
                            <Button onClick={props.handleSubmit} color="info" variant="outlined">{buttonText}</Button>
                        </Stack>
                    </div>
                )}
            </Formik>
        </div >
    )
}