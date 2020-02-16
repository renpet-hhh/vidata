import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import Header from '../components/static/Header'
import { AppState } from '../store/configStore';

interface Props extends ReturnType<typeof mapState>, ReturnType<typeof mapDispatch> {

};

const test = (props: Props) => {

    return (
        <div>
            <Header />
            <p>{JSON.stringify(props.state.session)}</p>
        </div>
    );
};

const mapState = (state: AppState) => ({
    state
});

const mapDispatch = (dispatch: Dispatch) => ({
    dispatch
});

export default connect(mapState, mapDispatch)(test);