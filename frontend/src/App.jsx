import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Dataset from './components/datasets'

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <Redirect to='/datasets/' />
                </Route>
                <Route path='/datasets/' component={Dataset} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
