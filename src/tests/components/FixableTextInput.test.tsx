import React from 'react';
import { render, cleanup, fireEvent, act } from '@testing-library/react';
import FixableInput from '../../components/FixableInput';
import buildQueryByAnyText from '../utils/buildQueryByAnyText';
import COLOR from '../../constants/COLOR';

afterEach(cleanup);


describe('renders', () => {

    it('placeholder', () => {
        const renderResult = render(<FixableInput placeholder="ABCDE"></FixableInput>);
        const queryByAnyText = buildQueryByAnyText(renderResult);
        expect(queryByAnyText("ABCDE")).toBeInTheDocument();
        expect(queryByAnyText("ABCDE")).toHaveStyle(`color: ${COLOR.placeholder}`);
    });

    it('defaultText', () => {
        const renderResult = render(<FixableInput defaultText="FGHIJ" placeholder="placeholder"></FixableInput>);
        const queryByAnyText = buildQueryByAnyText(renderResult);
        expect(queryByAnyText("FGHIJ")).toBeInTheDocument();
        expect(queryByAnyText("placeholder")).not.toBeInTheDocument();
    });

});

describe('fixed component', () => {
    it('is rendered initially', () => {
        const { queryByTestId } = render(<FixableInput placeholder="ABCDE"></FixableInput>);
        expect(queryByTestId("fixed")).toBeInTheDocument();
    });

    it('transitions to editable', () => {
        const { getByTestId } = render(<FixableInput placeholder="ABCDE"></FixableInput>);
        act(() => {
            fireEvent.click(getByTestId("fixed"));
        });
        expect(getByTestId("editable")).toBeInTheDocument();
    });
});


describe('editable component', () => {
    it('is not rendered initially', () => {
        const { queryByTestId } = render(<FixableInput placeholder="ABCDE"></FixableInput>);
        expect(queryByTestId("editable")).not.toBeInTheDocument();
    });

    it('transitions to fixed', () => {
        const { getByTestId } = render(<FixableInput placeholder="ABCDE"></FixableInput>);
        act(() => {
            fireEvent.click(getByTestId("fixed"));
        });
        act(() => {
            fireEvent.blur(getByTestId("editable"))
        })
        expect(getByTestId("fixed")).toBeInTheDocument();
    });

    it('is writable', () => {
        const renderResult = render(<FixableInput defaultText="FGHIJ"></FixableInput>);
        const queryByAnyText = buildQueryByAnyText(renderResult);
        act(() => {
            fireEvent.click(queryByAnyText("FGHIJ")!);
        })
        act(() => {
            fireEvent.change(queryByAnyText("FGHIJ")!, { target: { value: "abc" } });
        })
        expect(queryByAnyText("abc")).toBeInTheDocument();
    })
})

describe('text is kept when transitioning', () => {
    it('from fixed to editable', () => {
        const renderResult = render(<FixableInput defaultText="FGHIJ"></FixableInput>);
        const queryByAnyText = buildQueryByAnyText(renderResult);
        act(() => {
            fireEvent.click(queryByAnyText("FGHIJ")!);
        })
        expect(queryByAnyText("FGHIJ")).toBeInTheDocument();
    });

    it('from editable to fixed', () => {
        const renderResult = render(<FixableInput defaultText="FGHIJ"></FixableInput>);
        const queryByAnyText = buildQueryByAnyText(renderResult);
        act(() => {
            fireEvent.click(queryByAnyText("FGHIJ")!);
        })
        const editable = queryByAnyText("FGHIJ")!;
        act(() => {
            fireEvent.change(editable, { target: { value: "abcd" } });
            fireEvent.blur(editable);
        })
        expect(queryByAnyText("abcd")).toBeInTheDocument();
    })
})


it('border appears when hovered', () => {
    const renderResult = render(<FixableInput hoverColor="#123456" placeholder="hey"></FixableInput>);
    const queryByAnyText = buildQueryByAnyText(renderResult);
    act(() => {
        fireEvent.mouseEnter(queryByAnyText("hey")!);
    });
    expect(queryByAnyText("hey")).toHaveStyle(`border-color: #123456`);
});

it('max number of characters is respected when defaultText is larger', () => {
    const renderResult = render(<FixableInput maxLength={4} defaultText="ABCDE"></FixableInput>);
    const queryByAnyText = buildQueryByAnyText(renderResult);
    expect(queryByAnyText("ABCDE")).not.toBeInTheDocument();
    expect(queryByAnyText("ABCD")).toBeInTheDocument();
})

