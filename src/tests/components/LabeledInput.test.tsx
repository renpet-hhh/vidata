import React from 'react';
import { cleanup, render } from "@testing-library/react";
import LabeledInput from '../../components/LabeledInput';
import buildQueryByAnyText from '../utils/buildQueryByAnyText';

afterEach(cleanup);

it('renders correct label', () => {
    const renderResult = render(<LabeledInput label="Test"></LabeledInput>);
    const queryByAnyText = buildQueryByAnyText(renderResult);
    expect(queryByAnyText("Test")).toBeInTheDocument();
});

it('has Input field', () => {
    const { getByTestId } = render(<LabeledInput label="label"></LabeledInput>);
    expect(getByTestId("Input")).toBeInTheDocument();
});
