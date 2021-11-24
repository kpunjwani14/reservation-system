import React from 'react';
import { HomeNavbar } from './Components/HomeNavbar';
import { SearchTableForm } from './Components/SearchTableForm';

export const Homepage = () => {
    return (
        <div>
            <HomeNavbar />
            <SearchTableForm />
        </div>
    )
}