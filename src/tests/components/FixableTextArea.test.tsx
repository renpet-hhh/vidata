import React from 'react';
import { render, act, fireEvent, RenderResult, cleanup } from '@testing-library/react';
import FixableTextArea from '../../components/FixableTextArea';
import COLOR from '../../constants/COLOR';
import buildQueryByAnyText from '../utils/buildQueryByAnyText';

describe('fixed test', () => {
    let queryByAnyText: (text: string) => HTMLElement | null, getByTestId: RenderResult['getByTestId'];
    let queryByTestId: RenderResult['queryByTestId'];

    beforeEach(() => {
        const renderResult = render(<FixableTextArea placeholder="holder" defaultText="fixedText"></FixableTextArea>);
        queryByAnyText = buildQueryByAnyText(renderResult);
        getByTestId = renderResult.getByTestId;
        queryByTestId = renderResult.queryByTestId;
    })

    afterEach(cleanup);

    it('is initially rendered correctly', () => {
        expect(queryByTestId("fixed")).toBeInTheDocument();
        expect(queryByAnyText("fixedText")).toBeInTheDocument();
        expect(queryByTestId("editable")).not.toBeInTheDocument();
    })

    it('is editable after click', () => {
        act(() => {
            fireEvent.click(queryByAnyText("fixedText")!);
        })
        expect(queryByTestId("editable")).toBeInTheDocument();
        expect(queryByTestId("fixed")).not.toBeInTheDocument();
        act(() => {
            fireEvent.change(getByTestId("editable"), { target: { value: "edited" } });
        })
        expect(queryByAnyText("edited")).toBeInTheDocument();
    })

    it('has not placeholder color', () => {
        expect(queryByAnyText("fixedText")).not.toHaveStyle(`color: ${COLOR.placeholder}`);
    })
})



describe('the placeholder', () => {
    let queryByAnyText: (text: string) => HTMLElement | null, getByTestId: RenderResult['getByTestId'];

    beforeEach(() => {
        const renderResult = render(
            <FixableTextArea placeholder="holder"></FixableTextArea>
        );
        queryByAnyText = buildQueryByAnyText(renderResult);
        getByTestId = renderResult.getByTestId;
    })

    afterEach(cleanup);

    it('has placeholder color', () => {
        expect(queryByAnyText("holder")!).toHaveStyle(`color: ${COLOR.placeholder}`);
    })

    it(`disappears when editing`, () => {
        act(() => {
            fireEvent.click(queryByAnyText("holder")!);
        })
        expect(queryByAnyText("holder")).not.toBeInTheDocument();
    })

    it(`reappears when edited text is empty`, () => {
        act(() => {
            fireEvent.click(queryByAnyText("holder")!);
        })
        act(() => {
            fireEvent.change(getByTestId("editable"), { target: { value: "" } });
            fireEvent.blur(getByTestId("editable"));
        })
        expect(queryByAnyText("holder")).toBeInTheDocument();
    })

    it(`disappears when edited text is not empty`, () => {
        act(() => {
            fireEvent.click(queryByAnyText("holder")!);
        })
        act(() => {
            fireEvent.change(getByTestId("editable"), { target: { value: "not empty!" } });
            fireEvent.blur(getByTestId("editable"));
        })
        expect(queryByAnyText("holder")).not.toBeInTheDocument();
    })
})


describe('keeps edits when transitioning', () => {
    let queryByAnyText: (text: string) => HTMLElement | null;
    let getByTestId: RenderResult['getByTestId'];


    beforeEach(() => {
        const renderResult = render(
            <FixableTextArea placeholder="holder" defaultText="fixedText"></FixableTextArea>
        );
        queryByAnyText = buildQueryByAnyText(renderResult);
        getByTestId = renderResult.getByTestId;
    })

    afterEach(cleanup);

    it('from fixed to editable', () => {
        act(() => {
            fireEvent.click(getByTestId("fixed"));
        })
        expect(queryByAnyText("fixedText")).toBeInTheDocument();
    })

    it('from editable to fixed', () => {
        act(() => {
            fireEvent.click(getByTestId("fixed"));
        })
        act(() => {
            fireEvent.change(getByTestId("editable"), { target: { value: "edited" } });
            fireEvent.blur(getByTestId("editable"));
        })
        expect(queryByAnyText("edited")).toBeInTheDocument();
    })
});
