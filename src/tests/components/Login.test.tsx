import React from 'react';
import { render, act, fireEvent, wait, waitForElement, RenderResult, cleanup } from '@testing-library/react';
import Login from '../../components/Login';
import mockAxios from '../__mocks__/axios';
import RequestErr from '../../constants/RequestErr';
import { Provider } from 'react-redux';
import mockStore, { MockStore } from '../__mocks__/mockStore';

let getByText: RenderResult['getByText'], getByLabelText: RenderResult['getByLabelText'], getByTestId: RenderResult['getByTestId'];
let username: HTMLElement, password: HTMLElement, submitButton: HTMLElement;
let onSuccess: jest.Mock;
let store: MockStore;

beforeEach(() => {
    onSuccess = jest.fn();
    store = mockStore();

    const renderResult = render(<Provider store={store}>
        <Login onSuccess={onSuccess}></Login>
    </Provider>);
    getByText = renderResult.getByText;
    getByLabelText = renderResult.getByLabelText;
    getByTestId = renderResult.getByTestId;

    username = getByLabelText(/username/i);
    password = getByLabelText(/password/i);
    submitButton = getByText(/login/i);
})

afterEach(() => {
    cleanup();
    mockAxios.reset();
    onSuccess.mockReset();
})


it('posts to api with axios (prerequisite for tests below) [implementation detail]', async () => {
    act(() => {
        fireEvent.change(username, { target: { value: "dummy1" } });
        fireEvent.change(password, { target: { value: "dummy2" } });
    });
    act(() => {
        fireEvent.click(submitButton);
        mockAxios.mockResponse({ status: 200, data: "OK" });
    });
    // the wait below considers axios(config) and axios.post(url, data) calls, both of which could be used
    await wait(() => mockAxios.post.mock.calls.length >= 1 || mockAxios.mock.calls.length >= 1);
});


describe('displays alert when authentication fails because of the', () => {
    it('client', async () => {
        act(() => {
            fireEvent.change(username, { target: { value: "dummy1" } });
            fireEvent.change(password, { target: { value: "dummy2" } });
            fireEvent.click(submitButton);
            mockAxios.mockError({ response: { status: 422, data: RequestErr.AUTHENTICATION_FAILED } });
        });
        await waitForElement(() => getByTestId("Alert-text"));
    });

    it('server', async () => {
        act(() => {
            fireEvent.change(username, { target: { value: "dummy1" } });
            fireEvent.change(password, { target: { value: "dummy2" } });
            fireEvent.click(submitButton);
            mockAxios.mockError({ response: { status: 500, data: RequestErr.MONGOSTORE_DISCONNECTED } });
        });
        await waitForElement(() => getByTestId("Alert-text"));
    });
});

/** The implementation of the success behavior is given by the caller.
 * We're testing if the caller is able to control it.
 */
it('handles successful authentication correctly', async () => {
    act(() => {
        fireEvent.change(username, { target: { value: "dummy1" } });
        fireEvent.change(password, { target: { value: "dummy2" } });
    });
    const mockedAction = { type: 'UPDATE', merge: { username: "dummy1" } };
    act(() => {
        fireEvent.click(submitButton);
        mockAxios.mockResponse({ status: 200, data: { action: mockedAction } });
    })
    await wait(() => store.dispatch.mock.calls.length === 1);
    expect(onSuccess).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenLastCalledWith(mockedAction);
});
