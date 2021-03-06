import React from 'react';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Profile } from '../Profile/index';
import Cookies from 'js-cookie'

export const ProfileIcon = ({ auth, setAuth }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isLoading,setLoading]= React.useState(true)
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);

    };

    const signOut = () => {
        setAuth(false);
        Cookies.set('access_token',null)
        Cookies.set('id',null)
    
    }
    React.useEffect(() => {
        setLoading(false)
    },[])

    

    return (
        
        !isLoading? <div>

            {auth && (
                <div>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >

                        <Profile closeMenu={handleClose} />
                        <MenuItem onClick={handleClose && signOut}>Sign out</MenuItem>
                    </Menu>
                </div>
            )
            }
        </div >:<></>
    )
}