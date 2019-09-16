import React from 'react'
import { Route, RouteProps } from 'react-router';

type Props = {
    allow: boolean,
    fallbackComponent?: RouteProps["component"],
    fallbackRender?: RouteProps["render"],
    fallbackChildren?: RouteProps["children"]
} & RouteProps;

export default function RestrictRoute(props: Props) {
    const { allow, fallbackComponent, fallbackRender, fallbackChildren, ...propsForAllowed } = props;
    const { component, render, children, ...propsForRestricted } = propsForAllowed;
    return allow ? <Route {...propsForAllowed}></Route> :
        <Route {...propsForRestricted} component={fallbackComponent} render={fallbackRender} children={fallbackChildren}></Route>
}
