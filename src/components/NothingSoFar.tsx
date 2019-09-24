import React from 'react';
import { Blank, mixinFlexVertical } from "./styled/positionals";
import styled from 'styled-components';
import { CtnGray } from './styled/containers';

const StyledFlexVertical = styled(CtnGray)`${mixinFlexVertical}`;

const NothingSoFar = () => {
    return (
        <StyledFlexVertical style={{ width: "100%" }}>
            <Blank vertical="5rem"></Blank>
            <div>
                <span style={{ color: "#A0B0A0", fontSize: "1.5rem" }}>Nothing so far</span>
            </div>
            <Blank vertical="5rem"></Blank>
        </StyledFlexVertical>
    );
}


export default NothingSoFar;