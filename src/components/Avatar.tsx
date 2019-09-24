import React, { useState, useEffect, useRef } from 'react';
import Alert from './Alert';
import { connect } from 'react-redux';
import { AppState } from '../store/configStore';
import { Dispatch } from 'redux';
import { Center } from './styled/positionals';


interface Props extends ReturnType<typeof mapState>, ReturnType<typeof mapDispatch> {
    /** Avatar width and height */
    length: string,
    username: string,
    errorMsg?: string
}

const Avatar = (props: Props) => {
    const [showAlert, setShowAlert] = useState(!!props.errorMsg);

    useEffect(() => {
        setShowAlert(!!props.errorMsg);
    }, [props.errorMsg])


    console.log("Avatar rendered");

    return (
        <Center style={{ width: props.length, height: props.length, backgroundColor: "black" }}>
            {<img src={`/images/avatar/${props.username}.v.${props.lastModified.toString(20)}.jpeg`} style={{ width: props.length, height: props.length, position: "absolute" }} alt="User avatar"></img>}
            {showAlert && props.errorMsg && <Alert onClick={() => setShowAlert(false)} type="error">{props.errorMsg}</Alert>}
        </Center>
    )
}

const mapState = (state: AppState) => ({
    lastModified: state.profile.lastModified.avatar
})

const mapDispatch = (dispatch: Dispatch) => ({
    dispatch
});

export default connect(mapState, mapDispatch)(Avatar);