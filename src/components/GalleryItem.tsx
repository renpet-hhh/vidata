import React, { useState, CSSProperties } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import StaticCanvas from './StaticCanvas';
import { Button } from './styled/buttons';

interface Props extends ReturnType<typeof mapDispatch> {
    imageData: ImageData,
    style?: CSSProperties
};

const GalleryItem = (props: Props) => {
    const [isHovering, setIsHovering] = useState(false);

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
            {isHovering && <Button style={{ position: "absolute", bottom: "5%", left: "50%", transform: "translate(-50%, 0)"}}>Edit</Button>}
            <StaticCanvas imageData={props.imageData} style={{ width: "100%", display: "block" }} />
        </div>
    );
};


const mapDispatch = (dispatch: Dispatch) => ({
    dispatch
});

export default connect(null, mapDispatch)(GalleryItem);
