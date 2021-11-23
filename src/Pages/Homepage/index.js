import React from 'react';
import { HomeNavbar } from './Components/HomeNavbar';
import { SearchTableCard } from './Components/SearchTableCard';

export const Homepage = () => {
    return (
        <div>
            <HomeNavbar />
            <SearchTableCard />
        </div>
    )
}