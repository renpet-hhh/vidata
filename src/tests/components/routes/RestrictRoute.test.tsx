import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { cleanup, render } from '@testing-library/react';
import RestrictRoute from '../../../components/routes/RestrictRoute';

afterEach(cleanup);

describe('using render', () => {
    it('renders restricted component when user is allowed', () => {
        const wrapper = (<StaticRouter location="/a">
            <RestrictRoute path="/a" allow={true} render={() => <p>A</p>}></RestrictRoute>
        </StaticRouter>);

        const { queryByText } = render(wrapper);
        expect(queryByText("A")).toBeInTheDocument();
    })

    it(`doesn't render restricted component when user is not allowed`, () => {
        const wrapper = (<StaticRouter location="/a">
            <RestrictRoute path="/a" allow={false} render={() => <p>A</p>}></RestrictRoute>
        </StaticRouter>);

        const { queryByText } = render(wrapper);
        expect(queryByText("A")).not.toBeInTheDocument();
    })

    it('renders fallback component when user is not allowed', () => {
        const wrapper = (<StaticRouter location="/a">
            <RestrictRoute path="/a" allow={false} render={() => <p>A</p>} fallbackRender={() => <p>B</p>}></RestrictRoute>
        </StaticRouter>);

        const { queryByText } = render(wrapper);
        expect(queryByText("B")).toBeInTheDocument();
    })

    it(`doesn't render fallback component when user is allowed`, () => {
        const wrapper = (<StaticRouter location="/a">
            <RestrictRoute path="/a" allow={true} render={() => <p>A</p>} fallbackRender={() => <p>B</p>}></RestrictRoute>
        </StaticRouter>);

        const { queryByText } = render(wrapper);
        expect(queryByText("B")).not.toBeInTheDocument();
    })
})

describe('using component', () => {
    it('renders restricted component when user is allowed', () => {
        const wrapper = (<StaticRouter location="/a">
            <RestrictRoute path="/a" allow={true} component={() => <p>A</p>}></RestrictRoute>
        </StaticRouter>);

        const { queryByText } = render(wrapper);
        expect(queryByText("A")).toBeInTheDocument();
    })

    it(`doesn't render restricted component when user is not allowed`, () => {
        const wrapper = (<StaticRouter location="/a">
            <RestrictRoute path="/a" allow={false} component={() => <p>A</p>}></RestrictRoute>
        </StaticRouter>);

        const { queryByText } = render(wrapper);
        expect(queryByText("A")).not.toBeInTheDocument();
    })

    it('renders fallback component when user is not allowed', () => {
        const wrapper = (<StaticRouter location="/a">
            <RestrictRoute path="/a" allow={false} component={() => <p>A</p>} fallbackComponent={() => <p>B</p>}></RestrictRoute>
        </StaticRouter>);

        const { queryByText } = render(wrapper);
        expect(queryByText("B")).toBeInTheDocument();
    })

    it(`doesn't render fallback component when user is allowed`, () => {
        const wrapper = (<StaticRouter location="/a">
            <RestrictRoute path="/a" allow={true} component={() => <p>A</p>} fallbackComponent={() => <p>B</p>}></RestrictRoute>
        </StaticRouter>);

        const { queryByText } = render(wrapper);
        expect(queryByText("B")).not.toBeInTheDocument();
    })
})

describe('using children', () => {
    it('renders restricted component when user is allowed', () => {
        const wrapper = (<StaticRouter location="/a">
            <RestrictRoute path="/a" allow={true} children={() => <p>A</p>}></RestrictRoute>
        </StaticRouter>);

        const { queryByText } = render(wrapper);
        expect(queryByText("A")).toBeInTheDocument();
    })

    it(`doesn't render restricted component when user is not allowed`, () => {
        const wrapper = (<StaticRouter location="/a">
            <RestrictRoute path="/a" allow={false} children={() => <p>A</p>}></RestrictRoute>
        </StaticRouter>);

        const { queryByText } = render(wrapper);
        expect(queryByText("A")).not.toBeInTheDocument();
    })

    it('renders fallback component when user is not allowed', () => {
        const wrapper = (<StaticRouter location="/a">
            <RestrictRoute path="/a" allow={false} children={() => <p>A</p>} fallbackChildren={() => <p>B</p>}></RestrictRoute>
        </StaticRouter>);

        const { queryByText } = render(wrapper);
        expect(queryByText("B")).toBeInTheDocument();
    })

    it(`doesn't render fallback component when user is allowed`, () => {
        const wrapper = (<StaticRouter location="/a">
            <RestrictRoute path="/a" allow={true} children={() => <p>A</p>} fallbackChildren={() => <p>B</p>}></RestrictRoute>
        </StaticRouter>);

        const { queryByText } = render(wrapper);
        expect(queryByText("B")).not.toBeInTheDocument();
    })
})