import React, { RefObject } from 'react';
import Paint, { PaintMethods } from '../../components/Paint';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { act } from '@testing-library/react';


afterEach(cleanup);

it('renders blank', () => {
    const paintRef : RefObject<PaintMethods> = {current: null};
    render(<Paint ref={paintRef} width={10} height={10}></Paint>);
    const imageData = paintRef.current!.getImageData();
    expect(imageData).toMatchSnapshot("should be blank");
});

it('renders initial ImageData', () => {
    const paintRef : RefObject<PaintMethods> = {current: null};
    const initialImageData = new ImageData(10, 10);
    initialImageData.data.set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    render(<Paint ref={paintRef} initialImageData={initialImageData} width={10} height={10}></Paint>);
    const imageData = paintRef.current!.getImageData();
    expect(imageData).toMatchSnapshot("should have [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as first data");
});

it('draws on mousedown', async () => {
    const { getByTestId } = render(<Paint width={10} height={10}></Paint>);
    act(() => {
        fireEvent.mouseDown(getByTestId("Paint"), {clientX: 5, clientY: 5});
    });
    // @ts-ignore
    const ctx : CanvasRenderingContext2D = getByTestId("Paint").getContext("2d");
    expect(ctx.__getDrawCalls()).toMatchSnapshot("should draw arc at (5, 5)");
});

it('draws on drag', async () => {
    const { getByTestId } = render(<Paint width={10} height={10}></Paint>);
    act(() => {
        fireEvent.mouseDown(getByTestId("Paint"), {clientX: 5, clientY: 5});
    });
    act(() => {
        fireEvent.mouseMove(getByTestId("Paint"), {clientX: 6, clientY: 6});
    })
    // @ts-ignore
    const ctx : CanvasRenderingContext2D = getByTestId("Paint").getContext("2d");
    expect(ctx.__getDrawCalls()).toMatchSnapshot("should draw arc at (5, 5) and (6, 6)");
});

it(`doesn't draw on mousemove when not dragging`, async () => {
    const { getByTestId } = render(<Paint width={10} height={10}></Paint>);
    act(() => {
        fireEvent.mouseDown(getByTestId("Paint"), {clientX: 5, clientY: 5});
    });
    act(() => {
        fireEvent.mouseUp(getByTestId("Paint"));
    });
    act(() => {
        fireEvent.mouseMove(getByTestId("Paint"), {clientX: 6, clientY: 6});
    })
    // @ts-ignore
    const ctx : CanvasRenderingContext2D = getByTestId("Paint").getContext("2d");
    expect(ctx.__getDrawCalls()).toMatchSnapshot("should draw arc at (5, 5)");
});

it('draws correct color', () => {
    const { getByTestId } = render(<Paint width={10} height={10} color="#123456"></Paint>);
    act(() => {
        fireEvent.mouseDown(getByTestId("Paint"), {clientX: 2, clientY: 2});
    });
    // @ts-ignore
    const ctx : CanvasRenderingContext2D = getByTestId("Paint").getContext("2d");
    expect(ctx.__getEvents()).toMatchSnapshot("should have #123456 color");
});

it('draws correct radius', () => {
    const { getByTestId } = render(<Paint width={10} height={10} radius={4}></Paint>);
    act(() => {
        fireEvent.mouseDown(getByTestId("Paint"), {clientX: 2, clientY: 2});
    });
    // @ts-ignore
    const ctx : CanvasRenderingContext2D = getByTestId("Paint").getContext("2d");
    expect(ctx.__getDrawCalls()).toMatchSnapshot("should have radius 4");
});

it('erases', () => {
    const { getByTestId, rerender } = render(<Paint width={10} height={10} color="#123456"></Paint>);
    act(() => {
        fireEvent.mouseDown(getByTestId("Paint"), {clientX: 2, clientY: 2});
    });
    rerender(<Paint width={10} height={10} color="#123456" mode="erase"></Paint>);
    act(() => {
        fireEvent.mouseMove(getByTestId("Paint"), {clientX: 3, clientY: 3});
    });
    // @ts-ignore
    const ctx : CanvasRenderingContext2D = getByTestId("Paint").getContext("2d");
    expect(ctx.__getEvents()).toMatchSnapshot("should have erased at (3, 3)");
});

it('gets color in empty canvas', () => {
    // can't test for actual behavior
    const getColorListener = jest.fn();
    const { getByTestId } = render(<Paint width={10} height={10} color="#234567" mode="getColor" listeners={{getColor: getColorListener}}></Paint>);
    act(() => {
        fireEvent.click(getByTestId("Paint"), {clientX: 5, clientY: 5});
    });
    expect(getColorListener).toHaveBeenCalledTimes(1);
    expect(getColorListener).toHaveBeenLastCalledWith("rgba(0, 0, 0, 0)");
});
