import React, { useState, useRef } from 'react';
import { PaintMethods } from './Paint';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '../store/configStore';
import actionSaveCollection from '../store/actions/common/actionSaveCollection';
import { PaintGray } from './styled/components';
import ScrollerController from './ScrollerController';
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
    const [mode, setMode] = useState<"normal" | "erase" | "getColor">("normal");
    const [color, setColor] = useState<string>("black");
    const [radius, setRadius] = useState<number>(5);
    const paintRef = useRef<PaintMethods>(null);

    const save = () => {
        if (paintRef.current) {
            const imageData = paintRef.current.getImageData();
            const id = props.itemToBeEditedId || `${Date.now().toString(36)}`;
            props.dispatch(actionSaveCollection(id, imageData.data));
        }
    }

    const onClickErase = () => {
        mode === "erase" ? setMode("normal") : setMode("erase");
    }
    const onClickGetColor = () => {
        mode === "getColor" ? setMode("normal") : setMode("getColor");
    }
    const getColorListener = (color: string) => {
        setColor(color);
    }

    return (
        <div className={props.className}>
            <PaintGray ref={paintRef} initialImageData={props.initialImageData} color={color} radius={radius} width={props.width} height={props.height} mode={mode} listeners={{getColor: getColorListener}}></PaintGray>
            <BtnGray onClick={onClickErase} style={{backgroundColor: mode === "erase" ? "#222222" : undefined}}>Erase</BtnGray>
            <BtnGray onClick={onClickGetColor} style={{backgroundColor: mode === "getColor" ? "#222222" : undefined}}>Get color</BtnGray>
            <BtnGray onClick={() => paintRef.current && paintRef.current.undo()}>Undo</BtnGray>
            <BtnGray onClick={() => paintRef.current && paintRef.current.redo()}>Redo</BtnGray>
            <BtnGray onClick={() => paintRef.current && paintRef.current.clear()}>Clear</BtnGray>
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