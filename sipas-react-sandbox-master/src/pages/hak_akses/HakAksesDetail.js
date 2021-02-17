// @flow
import React from 'react';
import HakAksesDetailView from './HakAksesDetailView';

const HakAksesDetail = ({ record, ...restProps }) => {
	return (
		<HakAksesDetailView {...restProps} {...record} />
	);
};

export default HakAksesDetail;
