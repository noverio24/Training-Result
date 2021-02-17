// @flow
import React from 'react';
import PegawaiDetailView from './PegawaiDetailView';

const PegawaiDetail = ({ record, ...restProps }) => {
	return (
		<PegawaiDetailView {...restProps} {...record} />
	);
};

export default PegawaiDetail;
