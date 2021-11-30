import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Homepage } from '../Pages/Homepage';
import { HomeNavbar } from '../Pages/Components/HomeNavbar';

export const Routes = () => {
    return (
        <div>
            <HomeNavbar />
            <br />
            <Switch>
                <Route exact path='/' component={Homepage} />
            </Switch>
        </div>

    );
}