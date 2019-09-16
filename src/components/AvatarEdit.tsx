import React, { useState, CSSProperties, useRef } from 'react'
import Avatar from './Avatar';
import useToggle from '../hooks/useToggle';
import { connect } from 'react-redux';
import { AppState } from '../store/configStore';
import { askSaveAvatar } from '../server/routes/api/db/avatar/requests';
import { Dispatch } from 'redux';
import hasDispatchOrder from '../server/utils/hasDispatchOrder';
import { FlexVertical } from './styled/positionals';


interface Props extends ReturnType<typeof mapState>, ReturnType<typeof mapDispatch> {
    style?: CSSProperties
}


const AvatarEdit = (props: Props) => {
    const [errorMsg, setErrorMsg] = useState();
    const [forceUpdateKey, forceUpdate] = useToggle(0);
    // When closing the alert in Avatar, errorMsg remains the same, so setErrorMsg might be ignored by the Alert
    // Use forceUpdate to make the error alert always appear when needed, even if the error message didn't change

    const selectorStyle: CSSProperties = {
        color: "#909090",
        padding: "0.8rem",
        fontSize: "1.2rem",
        cursor: "pointer"
    }

    const sendAvatar = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.currentTarget.files;
        if (files) {
            const file = files.item(0);
            if (file) {
                if (file.size > 100000) {
                    setErrorMsg("Your file exceeds 100kb");
                    forceUpdate(); // change Avatar key (to always display error alert)
                    return;
                }
                setErrorMsg("");
                console.log("sending file in client");
                const res = await askSaveAvatar(file);
                console.log("received dispatch order");
                if (hasDispatchOrder(res)) {
                    console.log("sending dispatch order");
                    props.dispatch(res.data.action);
                }
            }
        }
    }


    /**
     * The file input resets its value when clicked
     * That way, the alert error can be shown even if the file chosen is the same
     */

    return (
        <FlexVertical style={props.style}>
            <Avatar length="12rem" username={props.profile.username} errorMsg={errorMsg} key={forceUpdateKey}></Avatar>
            <label htmlFor="profile-file-chooser" style={selectorStyle}>Change Avatar</label>
            <input type="file" style={{ display: "none" }} id="profile-file-chooser" onClick={e => e.currentTarget.value = ""} onChange={sendAvatar}></input>
        </FlexVertical>
    )
}

const mapState = (state: AppState) => ({
    logged: state.session.logged,
    profile: {
        username: state.profile.username || ""
    }
});

const mapDispatch = (dispatch: Dispatch) => ({
    dispatch
});

export default connect(mapState)(AvatarEdit);