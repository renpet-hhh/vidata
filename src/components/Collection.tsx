import React, { useState, CSSProperties } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { AppState } from '../store/configStore';
import { mixinFlexVertical, FlexHorizontalBetween } from './styled/positionals';
import { BtnTransparent } from './styled/buttons';
import styled from 'styled-components';
import { CtnGray } from './styled/containers';
import GalleryItem from './GalleryItem';

interface Props extends ReturnType<typeof mapState>, ReturnType<typeof mapDispatch> {

};

const StyledFlexVertical = styled(CtnGray)`
    ${mixinFlexVertical}
`;

const Collection = (props: Props) => {
    const [seeMore, setSeeMore] = useState(false);


    const itemStyle: CSSProperties = {
        width: "50%",
        margin: "1rem"
    }
    const galleryItems = [];
    for (const id in props.collection) {
        const imageData = new ImageData(props.collection[id], 500, 500);
        galleryItems.push(
            <GalleryItem id={id} key={id} imageData={imageData} style={itemStyle}></GalleryItem>
        );
    }
    const rowsJSX = [];
    for (let i = 0; i < galleryItems.length; i += 2) {
        // TODO: CHANGE INDEX BASED KEY TO HASHED
        rowsJSX.push(
            <FlexHorizontalBetween style={{ width: "100%" }} key={i}>
                {galleryItems[i]}
                {galleryItems[i + 1] || <div style={itemStyle}></div>}
            </FlexHorizontalBetween>
        );
        if (!seeMore) break;
    }

    return (
        <StyledFlexVertical style={{ width: "100%", padding: "1rem" }}>
            {rowsJSX}
            {!seeMore && <BtnTransparent onClick={() => setSeeMore(true)}>See more</BtnTransparent>}
            {seeMore && <BtnTransparent onClick={() => setSeeMore(false)}>Hide</BtnTransparent>}
        </StyledFlexVertical>
    );

}

const mapState = (state: AppState) => ({
    collection: state.profile.collection
});

const mapDispatch = (dispatch: Dispatch) => ({
    dispatch
});

export default connect(mapState, mapDispatch)(Collection);