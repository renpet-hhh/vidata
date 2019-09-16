import React from 'react'
import { connect } from 'react-redux';
import Header from '../components/static/Header';
import { AppState } from '../store/configStore';
import { Dispatch } from 'redux';

interface Props extends ReturnType<typeof mapState>, ReturnType<typeof mapDispatch> {

}

const Root = (props: Props) => {

    return (
        <div>
            <Header></Header>
        </div>
    );
}


const mapState = (state: AppState) => ({
    profile: state.profile
});

const mapDispatch = (dispatch: Dispatch) => ({
    dispatch
});

export default connect(mapState, mapDispatch)(Root);