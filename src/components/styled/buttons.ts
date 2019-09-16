import styled from "styled-components";

export const Button = styled.button`
    cursor: pointer;
    border: none;
    padding: 0.5rem;
    font-size: 1.3rem;
`;

export const BtnGray = styled(Button)`
    margin: 0.5rem;
    background-color: #707070;
    color: #F0F0F0;
    box-shadow: 1px 1px 4px 2px #C0C0C0;
`;

export const BtnTransparent = styled(Button)`
    background-color: transparent;
`;