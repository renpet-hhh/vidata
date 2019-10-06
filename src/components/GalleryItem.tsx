import React, { useState, CSSProperties } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import StaticCanvas from './StaticCanvas';
import { Button } from './styled/buttons';
import actionStartEditingCollection from '../store/actions/session/actionStartEditingCollection';
import { Redirect } from 'react-router';

interface Props extends ReturnType<typeof mapDispatch> {
    imageData: ImageData,
    id: string,
    style?: CSSProperties
};

const GalleryItem = (props: Props) => {
    const [isHovering, setIsHovering] = useState(false);
    const [redirectTo, setRedirectTo] = useState("");

    const onEdit = () => {
        props.dispatch(actionStartEditingCollection(props.id));
        setRedirectTo("/new");
    }

    /** STYLES */

    const hoverStyle : CSSProperties = {
        backgroundColor: "rgba(0, 0, 0, 0.1)"
    }
    const defaultStyle : CSSProperties = {
        position: "relative",
        boxSizing: "border-box"
    }
    const style : CSSProperties = Object.assign({}, defaultStyle, props.style, isHovering ? hoverStyle : {});

    return (
        <div style={style} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            {isHovering && <Button onClick={onEdit} style={{ position: "absolute", bottom: "5%", left: "50%", transform: "translate(-50%, 0)"}}>Edit</Button>}
            <StaticCanvas imageData={props.imageData} style={{ width: "100%", display: "block" }} />
            {redirectTo && <Redirect to={redirectTo}></Redirect>}
        </div>
    );
};


const mapDispatch = (dispatch: Dispatch) => ({
    dispatch
});

export default connect(null, mapDispatch)(GalleryItem);
