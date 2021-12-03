import React from 'react';
import {
    TextField,
    Stack,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormHelperText
} from '@mui/material';
import { Formik } from 'formik';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { StatesData } from './StatesData';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { values } from 'sequelize/dist/lib/operators';
import { json } from 'sequelize/dist';
import { ClosedCaptionDisabledOutlined } from '@mui/icons-material';

export const ProfileForm = ({ BillingAddress, BillingCity, buttonText, isRegisterModal, profileInfo, isReservationPage, onClose }) => {
    
    const states = StatesData.map(state => state.Name);
    const init =  {
        email: '',
        password: '',
        name: profileInfo.name,
        phone: profileInfo.phone,
        mailing: profileInfo.mailing,
        mailingCity: profileInfo.mailingCity,
        mailingState: profileInfo.mailingState,
        mailingZip: profileInfo.zip,
        isBillingSame: true,
        card:profileInfo.cardNumber,
        exp: profileInfo.exp,
        code: profileInfo.code,
        billing: '',
        billingCity: '',
        billingState: '',
        billingZip: '',
    }
    
    const handleSubmit = async (values) => {
        if(isReservationPage){
            toast.success('Successful Reservation')
        }
        else{
        const replacer = (key, val)=>{
            if(values.isBillingSame && key.startsWith('billing') )
                return undefined
            
            else
                return val
        }
        //console.log(values);
        try{
            

            let result = await axios.post('http://localhost:3001/register',{...JSON.parse(JSON.stringify(values,replacer)), isGuest:false})
            
            toast.success("Success!", { autoClose: 10000 });
            onClose()
            
        }
        catch(err){
            console.log(err.response.data)
            toast.error("Looks like an Error Occured Please Try Again!", { autoClose: 10000 });
        }
        
        isReservationPage && toast.warn("Failure to show up will result in a $10 charge", { autoClose: 10000 });}
    }

    const ProfileSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: isRegisterModal && Yup.string().email('Invalid email').required('Email is required'),
        password: isRegisterModal && Yup.string().required('Password is required'),
        phone: Yup.string().required('Phone Number is required').matches(/^\(\d{3}\) \d{3}-\d{4}$/i, "Phone Number must be in '(000) 000-0000' format"),
        mailing: Yup.string().required('Mailing Address is required'),
        mailingCity: Yup.string().required('City is required'),
        mailingState: Yup.string().required('State is required'),
        mailingZip: Yup.string().required('Zip Code is required').min(5, "Invalid Zip Code").max(5, "Invalid Zip Code"),
        card: Yup.string().required('Card Number is required').matches(/^[0-9]{16}$/, "Card Number must be 16 digits"),
        exp: Yup.string().required('Exp Date is required').matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Invalid Exp Date"),
        code: Yup.string().required('Security Code is required').matches(/^[0-9]{3}$/, "Security Code must be 3 digits"),
        isBillingSame: Yup.bool(),
        billing: Yup.string()
            .when('isBillingSame', {
                is: (isBillingSame) => !isBillingSame,
                then: Yup.string()
                    .required('Billing Address is required')
            }),
        billingCity: Yup.string()
            .when('isBillingSame', {
                is: (isBillingSame) => !isBillingSame,
                then: Yup.string()
                    .required('City is required')
            }),
        billingState: Yup.string()
            .when('isBillingSame', {
                is: (isBillingSame) => !isBillingSame,
                then: Yup.string()
                    .required('State is required')
            }),
        billingZip: Yup.string()
            .when('isBillingSame', {
                is: (isBillingSame) => !isBillingSame,
                then: Yup.string()
                    .required('Zip Code is required')
                    .min(5, "Invalid Zip Code")
                    .max(5, "Invalid Zip Code")
            })
    });

    return (
        <div>
            <Formik
            enableReinitialize
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
                                name="name"
                                label="Name"
                                mt={2}
                                value={props.values.name}
                                onChange={props.handleChange}
                                error={props.touched.name && Boolean(props.errors.name)}
                                helperText={props.touched.name && props.errors.name}
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
                            <FormControl>
                                <InputLabel id="demo-simple-select-label">State</InputLabel>
                                <Select
                                    required
                                    name="mailingState"
                                    value={props.values.mailingState}
                                    label="State"
                                    onChange={props.handleChange}
                                    error={props.touched.mailingState && Boolean(props.errors.mailingState)}
                                >
                                    {states && states.map(x => <MenuItem key={uuidv4()} value={x}>{x}</MenuItem>)}
                                </Select>
                                {props.touched.mailingState && Boolean(props.errors.mailingState) &&
                                    <FormHelperText error={true}>{props.errors.mailingState}</FormHelperText>
                                }
                            </FormControl>
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
                                    <FormControl>
                                        <InputLabel id="demo-simple-select-label">State</InputLabel>
                                        <Select
                                            required
                                            name="billingState"
                                            value={props.values.billingState}
                                            label="State"
                                            onChange={props.handleChange}
                                            error={props.touched.billingState && Boolean(props.errors.billingState)}
                                        >
                                            {states && states.map(x => <MenuItem key={uuidv4()} value={x}>{x}</MenuItem>)}
                                        </Select>
                                        {props.touched.billingState && Boolean(props.errors.billingState) &&
                                            <FormHelperText error={true}>{props.errors.billingState}</FormHelperText>
                                        }
                                    </FormControl>
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