import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { AppState } from '../store/configStore';
import { Center, FlexVertical } from '../components/styled/positionals';
import { mixinCtnGray } from '../components/styled/containers';
import { BtnGray } from '../components/styled/buttons';
import Header from '../components/static/Header';
import styled from 'styled-components';
import FixableInput from '../components/FixableInput';
import actionSaveCollection from '../store/actions/common/actionSaveCollection';
import PaintEditor from '../components/PaintEditor';

interface Props extends ReturnType<typeof mapState>, ReturnType<typeof mapDispatch> {

};



const New = (props: Props) => {
    const imageData = props.itemToBeEditedId ? new ImageData(props.collection[props.itemToBeEditedId], 500, 500) : undefined;
    return (
        <div>
            <Header></Header>
            <Center>
                <FlexVertical style={{ width: "70vw" }}>
                    <FixableInput overflowAllow={true} defaultText={"YES"} placeholder={"Insert a title here"} style={{ height: "2rem", margin: "0.2rem", maxWidth: "20rem" }}></FixableInput>
                    <PaintEditor initialImageData={imageData} width={500} height={500}></PaintEditor>
                </FlexVertical>
            </Center>
        </div>
    );
};

const mapState = (state: AppState) => ({
    collection: state.profile.collection,
    itemToBeEditedId: state.session.itemToBeEditedId,
    username: state.profile.username
});

const mapDispatch = (dispatch: Dispatch) => ({
    dispatch
});

export default connect(mapState, mapDispatch)(New);