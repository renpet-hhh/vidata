import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router';
import { AppState } from './store/configStore';
import { Dispatch } from 'redux';
import { hot } from 'react-hot-loader/root';

import Root from './pages/root';
import $Profile from './pages/profile'
import $Signin from './pages/signin';
import $Signup from './pages/signup';
import $New from './pages/new';

import RestrictRoute from './components/routes/RestrictRoute';
import $Test from './pages/test';
import Header from './components/static/Header';

interface Props extends ReturnType<typeof mapState>, ReturnType<typeof mapDispatch> {

}

/** 
 * Configures route logic and has access to all state
 */
const App = (props: Props) => {



    return (
        <div id="App">
            <Switch>
                <Route exact path="/" component={Root}></Route>
                <Route exact path="/test" component={$Test}></Route>
                <RestrictRoute exact allow={props.session.logged} path="/profile" component={$Profile} fallbackComponent={Root}></RestrictRoute>
                <RestrictRoute exact allow={props.session.logged} path="/new" component={$New} fallbackComponent={Root}></RestrictRoute>
                <RestrictRoute exact allow={!props.session.logged} path="/signin" component={$Signin} fallbackRender={() => <Redirect to="/profile"></Redirect>}></RestrictRoute>
                <RestrictRoute exact allow={!props.session.logged} path="/signup" component={$Signup} fallbackComponent={Root}></RestrictRoute>
                <Route render={() => <div><Header /><p>Not Found</p></div>}></Route>
            </Switch>
        </div>
    )
}

const mapState = (state: AppState) => ({
    ...state
})

const mapDispatch = (dispatch: Dispatch) => ({
    dispatch
})

/** 
 * Configures route logic and has access to all state (must be used with a Router and the Provider)
 */
export default hot(connect(mapState, mapDispatch)(App));