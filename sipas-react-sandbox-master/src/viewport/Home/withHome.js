import React from 'react';
import Home from './Home';

// home hoc
const withHome = WrappedComponent => props => (
	<Home>
		<WrappedComponent/>
	</Home>
);

export default withHome;