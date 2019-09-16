export interface MockStore {
    dispatch: jest.Mock,
    getState: jest.Mock,
    subscribe: jest.Mock,
    replaceReducer: jest.Mock,
    [Symbol.observable]: jest.Mock
}

const mockStore = (): MockStore => ({
    dispatch: jest.fn(),
    getState: jest.fn(),
    subscribe: jest.fn(),
    replaceReducer: jest.fn(),
    [Symbol.observable]: jest.fn()
});


export default mockStore;