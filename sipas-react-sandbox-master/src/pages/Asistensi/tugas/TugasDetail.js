// @flow
import React from 'react';
import TugasDetailView from './TugasDetailView';

const TugasDetail = ({ record, ...restProps }) => {
	return (
		<TugasDetailView {...restProps} {...record} />
	);
};

export default TugasDetail;
