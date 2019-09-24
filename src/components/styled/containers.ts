import styled, { css } from "styled-components";
import { mixinFormAligned } from "./positionals";

export const mixinCtnGray = css`
    border: 1px solid #C0C0C0;
    borderRadius: 1%;
    margin: 1rem;
    box-shadow: 2px 2px 5px 1px #D0D0D0;
    box-sizing: border-box;
`;

export const CtnGray = styled.div`
    ${mixinCtnGray}
`;

export const Form = styled.form`
    ${mixinFormAligned}
    ${mixinCtnGray}
`;
