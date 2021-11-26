import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Homepage } from '../Pages/Homepage';

export const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Homepage} />
        </Switch>
    );
}