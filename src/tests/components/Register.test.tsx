import React from 'react';
import { render, act, fireEvent, wait, waitForElement, RenderResult, cleanup } from '@testing-library/react';
import Register from '../../components/Register';
import mockAxios from '../__mocks__/axios';
import RequestErr from '../../constants/RequestErr';
import { Provider } from 'react-redux';
import mockStore, { MockStore } from '../__mocks__/mockStore';
import COLOR from '../../constants/COLOR';

let getByText: RenderResult['getByText'], getByLabelText: RenderResult['getByLabelText'], getByTestId: RenderResult['getByTestId'];
let username: HTMLElement, password: HTMLElement, email: HTMLElement, submitButton: HTMLElement;
let onSuccess: jest.Mock;
let store: MockStore;

beforeEach(async () => {
    onSuccess = jest.fn();
    store = mockStore();

    let renderResult = render(<Provider store={store}><Register onSuccess={onSuccess}></Register></Provider>);
    getByText = renderResult.getByText;
    getByLabelText = renderResult.getByLabelText;
    getByTestId = renderResult.getByTestId;

    username = getByLabelText(/username/i);
    password = getByLabelText(/password/i);
    email = getByLabelText(/e-?mail/i);
    submitButton = getByText(/sign up|register|create an account/i);

    jest.useFakeTimers();
});

afterEach(() => {
    cleanup();
    jest.useRealTimers();
});

/**
 * Fill all input fields and get a response from the server indicating that the username is already being used
 */
const setupFieldsAndReceiveResponse = async () => {
    await act(async () => {
        fireEvent.change(username, { target: { value: "dummy1" } });
        fireEvent.change(password, { target: { value: "dummy2" } });
        fireEvent.change(email, { target: { value: "dummy@dummy" } });
    });
    await act(async () => {
        jest.runAllTimers();
        mockAxios.mockResponse({ status: 200, data: true }); // /api/db/exists
    });
}

it('is using axios (prerequisite for the tests) [implementation detail]', async () => {
    await setupFieldsAndReceiveResponse();
    expect(mockAxios.post.mock.calls.length >= 1 || mockAxios.mock.calls.length >= 1).toBe(true);
})

describe('displays alert when authentication fails because of the', () => {

    it('client', async () => {
        await act(async () => {
            fireEvent.click(submitButton);
            mockAxios.mockError({ response: { status: 422, data: RequestErr.AUTHENTICATION_FAILED } });
        });
        await waitForElement(() => getByTestId("Alert-text"));
    });

    it('server', async () => {
        await act(async () => {
            fireEvent.click(submitButton);
            mockAxios.mockError({ response: { status: 500, data: RequestErr.MONGOSTORE_DISCONNECTED } });
        });
        await waitForElement(() => getByTestId("Alert-text"));
    });
});

/** 
 * The implementation of the success behavior is given by the caller.
 * We're testing if the caller is able to control it.
 */
it('handles successful authentication correctly', async () => {
    act(() => {
        fireEvent.click(submitButton);
        mockAxios.mockResponse({ status: 200, data: { ok: "OK" } });
    });
    await wait(() => onSuccess.mock.calls.length === 1);
});

it('warns about already used username', async () => {
    await setupFieldsAndReceiveResponse();
    expect(username).toHaveStyle(`border-color: ${COLOR.error.invalidField}`);
})
