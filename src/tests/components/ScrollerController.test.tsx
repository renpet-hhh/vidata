import React from 'react';
import { cleanup, render, RenderResult, act, fireEvent } from '@testing-library/react';
import ScrollerController from '../../components/ScrollerController';
import buildQueryByAnyText from '../utils/buildQueryByAnyText';


afterEach(cleanup);


it('should render', () => {
    const { queryByTestId } = render(<ScrollerController range={[0, 100]} value={50}></ScrollerController>);
    expect(queryByTestId("draggable")).toBeInTheDocument();
});

it('should render label', () => {
    const renderResult = render(<ScrollerController range={[0, 100]} value={50} label="abC"></ScrollerController>);
    const queryByAnyText = buildQueryByAnyText(renderResult);
    expect(queryByAnyText("abC")).toBeInTheDocument();
});

it('should render draggable at correct initial position', () => {
    let r: RenderResult;
    r = render(<ScrollerController range={[0, 100]} value={50} width={100} radius={5}></ScrollerController>);
    expect(r.queryByTestId("draggable")).toHaveStyle(`left: 45px;`);
    cleanup();

    r = render(<ScrollerController range={[0, 100]} value={50} width={200} radius={5}></ScrollerController>);
    expect(r.queryByTestId("draggable")).toHaveStyle(`left: 95px;`);
    cleanup();

    r = render(<ScrollerController range={[-200, 200]} value={200} width={10} radius={2}></ScrollerController>);
    expect(r.queryByTestId("draggable")).toHaveStyle(`left: 8px;`);
    cleanup();

    r = render(<ScrollerController range={[-200, 200]} value={-200} width={10} radius={2}></ScrollerController>);
    expect(r.queryByTestId("draggable")).toHaveStyle(`left: -2px;`);
    cleanup();

    r = render(<ScrollerController range={[100, 200]} value={120} width={100} radius={5}></ScrollerController>);
    expect(r.queryByTestId("draggable")).toHaveStyle(`left: 15px;`);
    cleanup();
});

describe('should handle change correctly', () => {
    let r: RenderResult;
    let draggable: HTMLElement;
    let onChange: jest.Mock;
    let wListeners: any = {};
    let rerenderWithValue: (value: number) => void;

    window.addEventListener = (type: string, listener: any) => {
        wListeners[type] = listener;
    }

    window.removeEventListener = (type: string, listener: any) => {
        if (listener === wListeners[type]) wListeners[type] = () => null;
    }

    beforeEach(() => {
        wListeners = {};
        onChange = jest.fn();
        r = render(<ScrollerController range={[0, 200]} value={50} width={100} radius={5} onChange={onChange}></ScrollerController>);
        draggable = r.getByTestId("draggable");

        rerenderWithValue = (value: number) => {
            r.rerender(<ScrollerController range={[0, 200]} value={value} width={100} radius={5} onChange={onChange}></ScrollerController>);
        };
    });

    afterEach(cleanup);

    it('between range (inclusive)', async () => {
        act(() => {
            fireEvent.mouseDown(draggable, { clientX: 25 }); // center of draggable
        });
        act(() => {
            wListeners['mousemove']({ clientX: 26 });
        });
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenLastCalledWith(52); // value === centerPosition * 2, because of range
        // it's onChange's responsibility to update the props, so just check if it was called correctly

        act(() => {
            wListeners['mousemove']({ clientX: 38 });
        });
        expect(onChange).toHaveBeenLastCalledWith(76); // value === centerPosition * 2, because of range

        act(() => {
            wListeners['mousemove']({ clientX: 0 });
        });
        expect(onChange).toHaveBeenLastCalledWith(0); // value === centerPosition * 2, because of range
    });

    it('outside range', async () => {
        act(() => {
            fireEvent.mouseDown(draggable, { clientX: 25 }); // center of draggable
        });
        act(() => {
            wListeners['mousemove']({ clientX: -1 });
        });
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenLastCalledWith(0); // value === 0, because position is below width

        act(() => {
            wListeners['mousemove']({ clientX: 120 });
        });
        expect(onChange).toHaveBeenLastCalledWith(200); // value === 200, because position is above width
    });

    it('by not changing when not dragging', () => {
        act(() => {
            fireEvent.mouseDown(draggable, { clientX: 25 });
        });
        act(() => {
            wListeners['mouseup']();
        });
        act(() => {
            wListeners['mousemove']({ clientX: 26 });
        });
        expect(onChange).not.toHaveBeenCalled();
    })

    it('keeping offset', () => {
        act(() => {
            fireEvent.mouseDown(draggable, { clientX: 24 }); // 1px to the left of the center of draggable
        });
        act(() => {
            wListeners['mousemove']({ clientX: 25 });
        });
        expect(onChange).toHaveBeenLastCalledWith(52); // center is at 26px and value === centerPosition * 2
        rerenderWithValue(52); // center is updated to 26px

        act(() => {
            wListeners['mouseup']();
        });
        act(() => {
            fireEvent.mouseDown(draggable, { clientX: 28 }); // 2px to the right of the center of draggable
        });
        act(() => {
            wListeners['mousemove']({ clientX: 27 });
        });
        expect(onChange).toHaveBeenLastCalledWith(50); // center is at 25px
    });
});
