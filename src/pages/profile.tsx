import React, { CSSProperties } from 'react'
import { connect } from 'react-redux';
import { AppState } from '../store/configStore';
import Header from '../components/static/Header';
import AvatarEdit from '../components/AvatarEdit';
import Logout from '../components/Logout';
import FixableTextArea from '../components/FixableTextArea';
import { askSaveProfile } from '../server/routes/api/db/profile/requests';
import { Dispatch } from 'redux';
import { Center, FlexVertical, FlexHorizontal, Blank } from '../components/styled/positionals';
import { CtnGray_style } from '../components/styled/containers';

interface Props extends ReturnType<typeof mapState>, ReturnType<typeof mapDispatch> {

}

const Profile = (props: Props) => {

    const headerStyle: CSSProperties = {
        fontSize: "1.8rem",
        marginTop: "2rem",
        marginBottom: "0.5rem",
        alignSelf: "flex-start"
    };

    return (
        <div>
            <Header></Header>
            <Center style={{ marginTop: "1rem" }}>
                <FlexVertical style={{ position: "relative", marginTop: "1rem", width: "75vw" }}>
                    <span style={{ fontSize: "1.9rem", marginLeft: "1rem", marginBottom: "2rem" }}>{props.profile.username}</span>
                    <FlexHorizontal style={{ width: "100%" }}>
                        <AvatarEdit></AvatarEdit>
                        <FixableTextArea onBlur={bioText => askSaveProfile(props.dispatch, { bioText })} defaultText={props.profile.bioText} style={{ width: "100%", height: "7rem", margin: "0 2rem" }} placeholder="Tell us about you!"></FixableTextArea>
                    </FlexHorizontal>
                    <header style={headerStyle}>Collection</header>
                    <FlexVertical style={{ width: "100%", ...CtnGray_style }}>
                        <Blank vertical="5rem"></Blank>
                        <div>
                            <span style={{ color: "#A0B0A0", fontSize: "1.5rem" }}>Nothing so far</span>
                        </div>
                        <Blank vertical="5rem"></Blank>
                    </FlexVertical>
                    <header style={headerStyle}>Awards</header>
                    <FlexVertical style={{ width: "100%", ...CtnGray_style }}>
                        <Blank vertical="5rem"></Blank>
                        <div>
                            <span style={{ color: "#A0B0A0", fontSize: "1.5rem" }}>Nothing so far</span>
                        </div>
                        <Blank vertical="5rem"></Blank>
                    </FlexVertical>
                </FlexVertical>
            </Center>
            <Logout>Logout</Logout>
        </div>
    )
}

const mapState = (state: AppState) => ({
    profile: state.profile
});

const mapDispatch = (dispatch: Dispatch) => ({
    dispatch
});

export default connect(mapState, mapDispatch)(Profile);