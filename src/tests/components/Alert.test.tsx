import React from 'react';
import Alert from '../../components/Alert';
import { render, cleanup, act, fireEvent } from '@testing-library/react';

afterEach(cleanup);

it('renders correct text', () => {
    const { getByText, getByTestId } = render(<Alert onClick={jest.fn()}>Testing... 1 2 3</Alert>);
    expect(getByText("Testing... 1 2 3")).toBeInTheDocument();
    // other tests depend on the id below
    expect(getByTestId("Alert-text")).toHaveTextContent("Testing... 1 2 3");
})

it('responds to click event', () => {
    /** The implementation of the click handler is a responsibility of the parent */
    const onClick = jest.fn();
    const { getByTestId } = render(<Alert onClick={onClick}>Testing... 1 2 3</Alert>);
    const closeButton = getByTestId("close-button");
    act(() => {
        fireEvent.click(closeButton);
    })
    expect(onClick).toHaveBeenCalledTimes(1);
})

