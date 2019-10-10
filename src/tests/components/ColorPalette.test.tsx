import React from 'react';
import { render, act, fireEvent, RenderResult } from "@testing-library/react";
import ColorPalette from "../../components/ColorPalette";


describe('renders', () => {
    it('input field', () => {
        const { queryByDisplayValue } = render(<ColorPalette value="black" onChange={() => null}></ColorPalette>);
        expect(queryByDisplayValue("black")).toBeInTheDocument();
    });

    it('label', () => {
        const { queryByLabelText } = render(<ColorPalette label="AbDcR" value="black" onChange={() => null}></ColorPalette>);
        expect(queryByLabelText("AbDcR")).toBeInTheDocument();
    });

    it('invisible color palette initially', () => {
        const { queryByTestId } = render(<ColorPalette label="AbDcR" value="black" onChange={() => null}></ColorPalette>);
        expect(queryByTestId("color-picker")).not.toBeVisible();
    });

    it('color indicator', () => {
        const { queryByTestId } = render(<ColorPalette label="AbDcR" value="black" onChange={() => null}></ColorPalette>);
        expect(queryByTestId("color-indicator")).toBeInTheDocument();
    });
});

describe('color palette appears when', () => {
    it('input is focused', () => {
        const { queryByTestId, getByDisplayValue } = render(<ColorPalette label="AbDcR" value="black" onChange={() => null}></ColorPalette>);
        act(() => {
            fireEvent.focus(getByDisplayValue("black"));
        });
        expect(queryByTestId("color-picker")).toBeVisible();
    });

    it('label text is clicked', () => {
        const { queryByTestId, getByLabelText } = render(<ColorPalette label="AbDcR" value="black" onChange={() => null}></ColorPalette>);
        act(() => {
            fireEvent.focus(getByLabelText("AbDcR"));
        });
        expect(queryByTestId("color-picker")).toBeVisible();
    });
});

it('color palette disappears when document is clicked outside palette area', () => {
    const { queryByTestId, getByText } = render(<div>
        <p>outside</p>
        <ColorPalette label="AbDcR" value="black" onChange={() => null}></ColorPalette>
    </div>);
    act(() => {
        fireEvent.click(getByText("outside"));
    });
    expect(queryByTestId("color-picker")).not.toBeVisible();
});

it(`color palette doesn't disappear when a click occurs inside the palette area`, () => {
    const { getByTestId, getByLabelText } = render(<ColorPalette label="AbDcR" value="black" onChange={() => null}></ColorPalette>);
    act(() => {
        fireEvent.focus(getByLabelText("AbDcR"));
    });
    act(() => {
        fireEvent.click(getByTestId("color-picker"));
    });
    expect(getByTestId("color-picker")).toBeVisible();
});

describe('input', () => {
    let input: HTMLElement;
    let getByTestId: RenderResult['getByTestId'], getByDisplayValue: RenderResult['getByDisplayValue'];
    let onChange: jest.Mock;
    let rerenderWithValue: (value: string) => void;
    beforeEach(() => {
        onChange = jest.fn();
        const r = render(<ColorPalette label="AbDcR" value="black" onChange={onChange}></ColorPalette>);
        getByTestId = r.getByTestId;
        getByDisplayValue = r.getByDisplayValue;
        rerenderWithValue = (value: string) => r.rerender(<ColorPalette label="AbDcR" value={value} onChange={onChange}></ColorPalette>);
        input = getByDisplayValue("black");
    })

    it('changes color indicator on valid change', () => {
        act(() => {
            fireEvent.change(input, { target: { value: "#123456" } });
        });
        expect(input).toHaveValue("#123456");
        expect(onChange).toHaveBeenLastCalledWith("#123456");
        rerenderWithValue("#123456");
        expect(getByTestId("color-indicator")).toHaveStyle(`background-color: #123456;`);

        act(() => {
            fireEvent.change(input, { target: { value: "red" } });
        });
        expect(onChange).toHaveBeenLastCalledWith("red");
        rerenderWithValue("red");
        expect(getByTestId("color-indicator")).toHaveStyle(`background-color: red;`);
    });

    it('keeps same color indicator on invalid change', () => {
        act(() => {
            fireEvent.change(input, { target: { value: "rFAILed" } });
        });
        expect(onChange).not.toHaveBeenCalled();
        expect(getByTestId("color-indicator")).toHaveStyle(`background-color: black;`);

        act(() => {
            fireEvent.change(input, { target: { value: "" } });
        });
        expect(onChange).not.toHaveBeenCalled();
        expect(getByTestId("color-indicator")).toHaveStyle(`background-color: black;`);
    });
});
