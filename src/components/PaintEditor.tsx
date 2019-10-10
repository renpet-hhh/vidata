import React, { useState, useRef } from 'react';
import { PaintMethods } from './Paint';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '../store/configStore';
import actionSaveCollection from '../store/actions/common/actionSaveCollection';
import { PaintGray } from './styled/components';
import ScrollerController from './ScrollerController';
import useToggle from '../hooks/useToggle';
import { BtnGray } from './styled/buttons';
import ColorPalette from './ColorPalette';

interface Props extends ReturnType<typeof mapState>, ReturnType<typeof mapDispatch> {
    width: number,
    height: number,
    initialImageData?: ImageData,
    // styled-components
    className?: string
}

const PaintEditor = (props: Props) => {
    const [color, setColor] = useState<string>("black");
    const [radius, setRadius] = useState<number>(5);
    const [eraseActive, toggleEraseActive] = useToggle(false);
    const paintRef = useRef<PaintMethods>(null);

    const save = () => {
        if (paintRef.current) {
            const imageData = paintRef.current.getImageData();
            const id = props.itemToBeEditedId || `${Date.now().toString(36)}`;
            props.dispatch(actionSaveCollection(id, imageData.data));
        }
    }

    return (
        <div className={props.className}>
            <PaintGray ref={paintRef} initialImageData={props.initialImageData} color={color} radius={radius} width={props.width} height={props.height} erase={eraseActive}></PaintGray>
            <BtnGray onClick={toggleEraseActive} style={{backgroundColor: eraseActive ? "#222222" : undefined}}>Erase</BtnGray>
            <BtnGray onClick={() => paintRef.current && paintRef.current.undo()}>Undo</BtnGray>
            <BtnGray onClick={() => paintRef.current && paintRef.current.redo()}>Redo</BtnGray>
            <BtnGray onClick={save}>Save</BtnGray>
            <ScrollerController width={200} height={2} radius={5} value={radius} onChange={setRadius} label="Radius" range={[0, 20]}></ScrollerController>
            <ColorPalette value={color} onChange={setColor} label="Color"></ColorPalette>
        </div>
    );
};

const mapState = (state: AppState) => ({
    itemToBeEditedId: state.session.itemToBeEditedId
});

const mapDispatch = (dispatch: Dispatch) => ({
    dispatch
});

export default connect(mapState, mapDispatch)(PaintEditor);