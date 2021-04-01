import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import MainLayout from './layout';

const App = () => {
    return (
        <>
            <HashRouter>
                <Switch>
                    <Route path="/" component={MainLayout} />
                </Switch>
            </HashRouter>
        </>
    )
}

export default App;