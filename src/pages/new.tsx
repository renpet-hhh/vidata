import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { AppState } from '../store/configStore';
import { Center, FlexVertical, FlexHorizontal, mixinFlexVertical } from '../components/styled/positionals';
import { CtnGray, mixinCtnGray } from '../components/styled/containers';
import { BtnGray } from '../components/styled/buttons';
import Header from '../components/static/Header';
import FixableTextArea from '../components/FixableTextArea';
import Paint from '../components/Paint';
import actionUpdateProfile from '../store/actions/profile/actionUpdateProfile';
import styled from 'styled-components';
import FixableInput from '../components/FixableInput';

interface Props extends ReturnType<typeof mapState>, ReturnType<typeof mapDispatch> {

};

const StyledPaint = styled(Paint)`${mixinCtnGray}`;

const generateRandomColor = () => `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

const New = (props: Props) => {
    const [paintColor, setPaintColor] = useState("black");
    const getImageDataRef = useRef<(() => ImageData) | null>(null);
    /*   
    useEffect(() => {
        window.setInterval(() => setPaintColor(generateRandomColor()), 1000);
    }, []);
    */

    const setPaintFunctions = ({ getImageData }: any) => {
        getImageDataRef.current = getImageData;
    }

    const save = () => {
        if (!getImageDataRef.current) return;
        const imageData = getImageDataRef.current();
        if (props.collection) {
            props.dispatch(actionUpdateProfile({ collection: [...props.collection, imageData.data] }));
        } else {
            props.dispatch(actionUpdateProfile({ collection: [imageData.data] }));
        }
    }
    return (
        <div>
            <Header></Header>
            <Center>
                <FlexVertical style={{ width: "70vw" }}>
                    <FixableInput defaultText={"ABCDEfkfk"} placeholder={"Insert a title here"} style={{ height: "2rem", margin: "0.2rem", maxWidth: "20rem" }}></FixableInput>
                    <StyledPaint callback={setPaintFunctions} color={paintColor} width={500} height={500} style={{ boxSizing: "content-box" }}></StyledPaint>
                    <BtnGray onClick={save}>Save</BtnGray>
                </FlexVertical>
            </Center>
        </div>
    );
};

const mapState = (state: AppState) => ({
    collection: state.profile.collection
});

const mapDispatch = (dispatch: Dispatch) => ({
    dispatch
});

export default connect(mapState, mapDispatch)(New);