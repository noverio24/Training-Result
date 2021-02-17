import React, { memo, Suspense } from 'react';
import { List } from 'immutable';
import { HashRouter as Router, Switch, Redirect } from 'react-router-dom';
import Route from 'system/Route';
import routesConfig from 'config/routes';
import { Curtain, NotFound } from 'viewport';

const routes = List(routesConfig);

const Stage = () => (
	<Router>
		<Suspense fallback={<Curtain />}>
			<Switch>
				{routes.map(({ redirect, path, exact, ...props }) => {
					if (redirect) {
						if ('string' == typeof redirect) {
							redirect = { from: path, to: redirect, exact: exact };
						}
						return <Redirect key={path} {...redirect} />;
					}

					return <Route key={path} path={path} exact={exact} {...props} />;
				})}
				<Route path='*' component={NotFound} />
			</Switch>
		</Suspense>
	</Router>
);

export default memo(Stage);
