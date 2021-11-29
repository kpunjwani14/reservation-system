import React from 'react';
import { TextField, Stack } from '@mui/material';
import { Formik } from 'formik';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as Yup from 'yup';

export const ProfileForm = ({ buttonText, isRegisterModal, profileInfo }) => {
    const init = profileInfo || {
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

    const ProfileSchema = Yup.object().shape({
        fullName: Yup.string().required('Name is required'),
        email: isRegisterModal && Yup.string().email('Invalid email').required('Email is required'),
        password: isRegisterModal && Yup.string().required('Password is required'),
        phone: Yup.string().required('Phone Number is required'),
        mailing: Yup.string().required('Mailing Address is required'),
        mailingCity: Yup.string().required('City is required'),
        mailingState: Yup.string().required('State is required'),
        mailingZip: Yup.string().required('Zip Code is required'),
        card: Yup.string().required('Card Number is required'),
        exp: Yup.string().required('Exp Date is required'),
        code: Yup.string().required('Security Code is required'),
        isBillingSame: Yup.bool(),
        billing: Yup.string()
            .when('isBillingSame', {
                is: (isBillingSame) => isBillingSame === false,
                then: Yup.string()
                    .required('Billing Address is required')
            }),
        billingCity: Yup.string()
            .when('isBillingSame', {
                is: (isBillingSame) => isBillingSame === false,
                then: Yup.string()
                    .required('City is required')
            }),
        billingState: Yup.string()
            .when('isBillingSame', {
                is: (isBillingSame) => isBillingSame === false,
                then: Yup.string()
                    .required('State is required')
            }),
        billingZip: Yup.string()
            .when('isBillingSame', {
                is: (isBillingSame) => isBillingSame === false,
                then: Yup.string()
                    .required('Zip Code is required')
            }),

    });

    return (
        <div>
            <Formik
                initialValues={init}
                validationSchema={ProfileSchema}
                onSubmit={handleSubmit}
            >
                {props => (
                    <div>
                        <Stack spacing={2}>
                            <Typography id="modal-modal-description">
                                Personal Info
                            </Typography>
                            <TextField
                                required
                                name="fullName"
                                label="Name"
                                mt={2}
                                value={props.values.fullName}
                                onChange={props.handleChange}
                                error={props.touched.fullName && Boolean(props.errors.fullName)}
                                helperText={props.touched.fullName && props.errors.fullName}
                            />
                            {isRegisterModal &&
                                <>
                                    <TextField
                                        required
                                        name="email"
                                        label="Email"
                                        value={props.values.email}
                                        onChange={props.handleChange}
                                        error={props.touched.email && Boolean(props.errors.email)}
                                        helperText={props.touched.email && props.errors.email}
                                    />
                                    <TextField
                                        required
                                        name="password"
                                        type="password"
                                        label="Password"
                                        value={props.values.password}
                                        onChange={props.handleChange}
                                        error={props.touched.password && Boolean(props.errors.password)}
                                        helperText={props.touched.password && props.errors.password}
                                    />
                                </>
                            }
                            <TextField
                                required
                                name="phone"
                                label="Phone Number"
                                value={props.values.phone}
                                onChange={props.handleChange}
                                error={props.touched.phone && Boolean(props.errors.phone)}
                                helperText={props.touched.phone && props.errors.phone}
                            />
                            <Typography id="modal-modal-description">
                                Address
                            </Typography>
                            <TextField
                                required
                                name="mailing"
                                label="Mailing Address"
                                value={props.values.mailing}
                                onChange={props.handleChange}
                                error={props.touched.mailing && Boolean(props.errors.mailing)}
                                helperText={props.touched.mailing && props.errors.mailing}
                            />
                            <TextField
                                required
                                name="mailingCity"
                                label="City"
                                value={props.values.mailingCity}
                                onChange={props.handleChange}
                                error={props.touched.mailingCity && Boolean(props.errors.mailingCity)}
                                helperText={props.touched.mailingCity && props.errors.mailingCity}
                            />
                            <TextField
                                required
                                name="mailingState"
                                label="State"
                                value={props.values.mailingState}
                                onChange={props.handleChange}
                                error={props.touched.mailingState && Boolean(props.errors.mailingState)}
                                helperText={props.touched.mailingState && props.errors.mailingState}
                            />
                            <TextField
                                required
                                name="mailingZip"
                                label="Zip Code"
                                value={props.values.mailingZip}
                                onChange={props.handleChange}
                                error={props.touched.mailingZip && Boolean(props.errors.mailingZip)}
                                helperText={props.touched.mailingZip && props.errors.mailingZip}
                            />

                            <Typography id="modal-modal-description">
                                Preferred Payment
                            </Typography>
                            <TextField
                                required
                                name="card"
                                label="Card Number"
                                value={props.values.card}
                                onChange={props.handleChange}
                                error={props.touched.card && Boolean(props.errors.card)}
                                helperText={props.touched.card && props.errors.card}
                            />
                            <TextField
                                required
                                name="exp"
                                label="Exp Date (MM/YY)"
                                value={props.values.exp}
                                onChange={props.handleChange}
                                error={props.touched.exp && Boolean(props.errors.exp)}
                                helperText={props.touched.exp && props.errors.exp}
                            />
                            <TextField
                                required
                                name="code"
                                label="Security Code"
                                value={props.values.code}
                                onChange={props.handleChange}
                                error={props.touched.code && Boolean(props.errors.code)}
                                helperText={props.touched.code && props.errors.code}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={props.values.isBillingSame}
                                        onChange={() => props.setFieldValue('isBillingSame', !props.values.isBillingSame)}
                                        name="isBillingSame"
                                    />
                                }
                                label="Billing same as mailing"
                            />
                            {!props.values.isBillingSame &&
                                <>
                                    <TextField
                                        required
                                        name="billing"
                                        label="Billing Address"
                                        value={props.values.billing}
                                        onChange={props.handleChange}
                                        error={props.touched.billing && Boolean(props.errors.billing)}
                                        helperText={props.touched.billing && props.errors.billing}
                                    />
                                    <TextField
                                        required
                                        name="billingCity"
                                        label="City"
                                        value={props.values.billingCity}
                                        onChange={props.handleChange}
                                        error={props.touched.billingCity && Boolean(props.errors.billingCity)}
                                        helperText={props.touched.billingCity && props.errors.billingCity}
                                    />
                                    <TextField
                                        required
                                        name="billingState"
                                        label="State"
                                        value={props.values.billingState}
                                        onChange={props.handleChange}
                                        error={props.touched.billingState && Boolean(props.errors.billingState)}
                                        helperText={props.touched.billingState && props.errors.billingState}
                                    />
                                    <TextField
                                        required
                                        name="billingZip"
                                        label="Zip Code"
                                        value={props.values.billingZip}
                                        onChange={props.handleChange}
                                        error={props.touched.billingZip && Boolean(props.errors.billingZip)}
                                        helperText={props.touched.billingZip && props.errors.billingZip}
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