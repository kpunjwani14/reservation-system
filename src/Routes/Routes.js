import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Homepage } from '../Pages/Homepage';
import { HomeNavbar } from '../Pages/Components/HomeNavbar';
import { ReserveTable } from '../Pages/ReserveTable';

export const Routes = () => {
    return (
        <div>
            <HomeNavbar />
            <br />
            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route path='/reservation' component={ReserveTable} />
            </Switch>
        </div>

    );
}