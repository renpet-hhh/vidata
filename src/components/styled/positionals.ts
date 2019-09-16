import React from 'react';
import styled from 'styled-components';

export const Blank = styled.div<{ vertical?: string, horizontal?: string }>`
    margin: ${props => props.vertical || 0} ${props => props.horizontal || 0};
    display: inline-block;
`;

export const FlexHorizontal = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const FlexHorizontalBetween = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const FlexVertical = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Center = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const FormAligned = styled.form`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-end;
    button {
        align-self: center;
    }
`;
