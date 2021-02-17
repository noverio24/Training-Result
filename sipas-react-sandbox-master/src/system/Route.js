// @flow
import React, { Node, Element } from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import applyMiddleware from 'apply-middleware';
import { assess } from 'system/Utils';

type Props = {
	component: Element,
	fallback: Node,
	middlewares?: Array<() => void>,
	condition?: Array<() => boolean>,
};

const EnhancedRoute = ({
	component: Component,
	middlewares,
	conditions,
	fallback,
	...props
}: Props) => (
	<Route
		{...props}
		render={renderProps => {
			applyMiddleware(() => {}, ...middlewares)();

			return assess(conditions) ? (
				<Component {...renderProps} />
			) : (
				<Redirect {...fallback} />
			);
		}}
	/>
);

EnhancedRoute.defaultProps = {
	middlewares: [],
	conditions: [],
};

const useQuery = () => {
	return new URLSearchParams(useLocation().search);
};

export default EnhancedRoute;
export { useQuery };
