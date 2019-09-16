import React from 'react';
import { AppState } from '../store/configStore';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/static/Header';
import Register from '../components/Register';
import { Center } from '../components/styled/positionals';


interface Props extends ReturnType<typeof mapState>, ReturnType<typeof mapDispatch> {

}

const $Signup = (props: Props) => {


    return (
        <div>
            <Header></Header>
            <Center>
                <Register onSuccess={() => window.location.href = "/signin"}></Register>
            </Center>
        </div>
    );
}

const mapState = (state: AppState) => ({
    profile: state.profile
});

const mapDispatch = (dispatch: Dispatch) => ({
    dispatch
});

export default connect(mapState, mapDispatch)($Signup);