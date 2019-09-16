import React from 'react';
import { AppState } from '../store/configStore';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/static/Header';
import Login from '../components/Login';


interface Props extends ReturnType<typeof mapState>, ReturnType<typeof mapDispatch> {

}

const $Signin = (props: Props) => {

    return (
        <div>
            <Header></Header>
            <Login></Login>
        </div>
    );
}

const mapState = (state: AppState) => ({
    profile: state.profile
});

const mapDispatch = (dispatch: Dispatch) => ({
    dispatch
});

export default connect(mapState, mapDispatch)($Signin);