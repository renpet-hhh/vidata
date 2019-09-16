type MockResponse = {
    json: () => Promise<any>,
    status: number
}

type MockOptions = {
    body: any,
    headers: any
}

/** Returns a mocked function used to mock window.fetch.
 * 
 *  Callers that execute window.fetch will receive `status` and `json` in the response object.
 * 
 * The `json` property is always equal to the `body` provided, there's no parsing.
 * 
 * @example
 * 
 * it('fetchs correctly', async () => {
 *    const mockedFetch = mockFetch(200, "Hey");
 *    window.fetch = mockedFetch;
 *    runCodeThatExecutesFetch();
 *    await wait(() => mockedFetch.calls.length >= 1); // maybe wait until fetch is called, if called async'ly
 *    // make assertions about the arguments received
 *    expect(mockedFetch).toHaveBeenCalledLastWith(...)
 *    // make assertions about the side effects of having received the given response
 *    expect(
 *      // HTMLElement that changes according to the response
 *    ).toHaveTextContent("Hey");
 *    
 * })
 */
const mockFetch = (status: number, body: any) => {
    const implementation = (url: string, options: MockOptions): MockResponse => {
        return {
            json: async () => body,
            status: status
        }
    };
    return jest.fn(implementation);
};

export default mockFetch;