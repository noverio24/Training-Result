// @flow
import React from 'react';
import KontakDetailView from './KontakDetailView';

const KontakDetail = ({ record, ...restProps }) => {
	return (
		<KontakDetailView {...restProps} {...record} />
	);
};

export default KontakDetail;
