import styled, { css } from 'styled-components';

export const mixinFlexHorizontal = css`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const mixinFlexHorizontalEvenly = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;

export const mixinFlexHorizontalBetween = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const mixinFlexVertical = css`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const mixinCenter = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const mixinFormAligned = css`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-end;
    button {
        align-self: center;
    }
`;

export const Blank = styled.div<{ vertical?: string, horizontal?: string }>`
    margin: ${props => props.vertical || 0} ${props => props.horizontal || 0};
    display: inline-block;
`;


export const FlexHorizontal = styled.div`
    ${mixinFlexHorizontal}
`;

export const FlexHorizontalEvenly = styled.div`
    ${mixinFlexHorizontalEvenly}
`;

export const FlexHorizontalBetween = styled.div`
    ${mixinFlexHorizontalBetween}
`;

export const FlexVertical = styled.div`
    ${mixinFlexVertical}
`;

export const Center = styled.div`
    ${mixinCenter}
`;

export const FormAligned = styled.form`
    ${mixinFormAligned}
`;
