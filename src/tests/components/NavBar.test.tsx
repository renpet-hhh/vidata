import React from 'react';
import { render, act, fireEvent, cleanup } from '@testing-library/react';
import NavBar from '../../components/NavBar';
import { BrowserRouter } from 'react-router-dom';

const wrapper = <BrowserRouter><NavBar names={["A", "B"]} paths={["/a", "/b"]}></NavBar></BrowserRouter>;

afterEach(cleanup);

it('all names are rendered', () => {
    const { getByText } = render(wrapper);
    expect(getByText("A")).toBeInTheDocument();
    expect(getByText("B")).toBeInTheDocument();
})

it('each nav must navigate to its corresponding link', () => {
    // @ts-ignore mock window
    window = { location: { pathname: "" } };
    const hrefs = ["/a", "/b"];
    const names = ["A", "B"];
    const { getByText } = render(wrapper);
    for (let i = 0; i < names.length; i++) {
        act(() => {
            fireEvent.click(getByText(names[i]));
        })
        expect(window.location.pathname).toEqual(hrefs[i]);
    }
})