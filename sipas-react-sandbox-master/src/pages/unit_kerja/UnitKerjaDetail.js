// @flow
import React from 'react';
import UnitKerjaDetailView from './UnitKerjaDetailView';

const UnitKerjaDetail = ({ record, ...restProps }) => {
	return (
		<UnitKerjaDetailView {...restProps} {...record} />
	);
};

export default UnitKerjaDetail;
