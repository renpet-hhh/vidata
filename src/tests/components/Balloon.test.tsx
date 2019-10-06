import React from 'react';
import { render, RenderResult, cleanup } from '@testing-library/react';
import Balloon from '../../components/Balloon';
import buildQueryByAnyText from '../utils/buildQueryByAnyText';


afterEach(cleanup);

it('should render text', () => {
    const r = render(<Balloon text="aBCd" x={0} y={0}></Balloon>);
    const queryByAnyText = buildQueryByAnyText(r);
    expect(queryByAnyText("aBCd")).toBeInTheDocument();

    r.rerender(<Balloon text="LALE" x={0} y={0}></Balloon>);
    expect(queryByAnyText("LALE")).toBeInTheDocument();
});

it('should position correctly', () => {
    let r: RenderResult;
    const container = document.createElement("div");
    container.style.position = "relative";
    document.body.appendChild(container);

    r = render(<Balloon text="aBCd" x={5} y={0}></Balloon>, { container });
    expect(r.container.firstElementChild).toBeInTheDocument();
    expect(r.container.firstElementChild).toHaveStyle(`left: 5px;`);
    expect(r.container.firstElementChild).toHaveStyle(`top: 0px;`);

    r.rerender(<Balloon text="aBCd" x={15} y={-7}></Balloon>);
    expect(r.container.firstElementChild).toBeInTheDocument();
    expect(r.container.firstElementChild).toHaveStyle(`left: 15px;`);
    expect(r.container.firstElementChild).toHaveStyle(`top: -7px;`);
});

