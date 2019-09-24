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

    const rowsJSX = [];
    for (let i = 0; i < props.profile.collection.length; i += 2) {
        const firstImg = props.profile.collection[i];
        const secondImg = props.profile.collection[i + 1];
        console.log(firstImg);
        console.log(secondImg);
        const style : CSSProperties = {
            width: "50%",
            margin: "1rem"
        }
        // TODO: CHANGE INDEX BASED KEY TO HASHED
        rowsJSX.push(
            <FlexHorizontalBetween style={{ width: "100%" }} key={i}>
                {firstImg && <GalleryItem style={style} imageData={new ImageData(firstImg, 500, 500)}></GalleryItem>}
                {secondImg ? <GalleryItem style={style} imageData={new ImageData(secondImg, 500, 500)}></GalleryItem> : <div style={style}></div>}
            </FlexHorizontalBetween>
        );
        if (!seeMore) break;
    }

    return (
        <StyledFlexVertical style={{width: "100%", padding: "1rem"}}>
            {rowsJSX}
            {!seeMore && <BtnTransparent onClick={() => setSeeMore(true)}>See more</BtnTransparent>}
            {seeMore && <BtnTransparent onClick={() => setSeeMore(false)}>Hide</BtnTransparent>}
        </StyledFlexVertical>
    );

}

const mapState = (state : AppState) => ({
    profile: state.profile
});

const mapDispatch = (dispatch: Dispatch) => ({
    dispatch
});

export default connect(mapState, mapDispatch)(Collection);