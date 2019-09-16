import React from 'react';
import { render, cleanup, act, fireEvent } from '@testing-library/react';
import Input from '../../components/Input';

afterEach(cleanup);

it('renders an input field', () => {
    const { getByTestId } = render(<Input></Input>);
    expect(getByTestId("Input")).toBeVisible();
})

it('is writable', () => {
    const { getByTestId } = render(<Input></Input>);
    const input = getByTestId("Input");
    act(() => {
        fireEvent.focus(input); // just in case there's a side effect onFocus
        fireEvent.change(input, { target: { value: "a" } });
    })
    expect(input).toHaveValue("a");
    act(() => {
        fireEvent.change(input, { target: { value: "ab" } });
    })
    expect(input).toHaveValue("ab");
    act(() => {
        fireEvent.change(input, { target: { value: "" } });
    })
    expect(input).toHaveValue("");
})

it('renders placeholder (if specified)', () => {
    const { getByPlaceholderText } = render(<Input placeholder="Enter your favorite number"></Input>);
    expect(getByPlaceholderText("Enter your favorite number")).toBeInTheDocument();
});


describe('notifies parent (if subscribed)', () => {
    it('every time value changes', () => {
        const onChange = jest.fn();
        const { getByTestId } = render(<Input onChange={onChange}></Input>);
        const input = getByTestId("Input");
        act(() => {
            fireEvent.change(input, { target: { value: "t" } });
            fireEvent.change(input, { target: { value: "ta" } });
            fireEvent.change(input, { target: { value: "tab" } });
        })
        expect(onChange).toHaveBeenCalledTimes(3);
        expect(onChange).toHaveBeenNthCalledWith(1, "t");
        expect(onChange).toHaveBeenNthCalledWith(2, "ta");
        expect(onChange).toHaveBeenNthCalledWith(3, "tab");
    });

    it('when focus is lost', () => {
        const onBlur = jest.fn();
        const { getByTestId } = render(<Input onBlur={onBlur}></Input>);
        const input = getByTestId("Input");
        act(() => {
            fireEvent.focus(input);
            fireEvent.change(input, { target: { value: "t" } });
            fireEvent.change(input, { target: { value: "ta" } });
            fireEvent.change(input, { target: { value: "tab" } });
        })
        expect(onBlur).not.toHaveBeenCalled();
        act(() => {
            fireEvent.blur(input);
        })
        expect(onBlur).toHaveBeenLastCalledWith("tab");
        expect(onBlur).toHaveBeenCalledTimes(1);
    });
})