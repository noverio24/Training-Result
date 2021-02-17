// @flow
import React from 'react';
import DaftarKelompokDetailView from './DaftarKelompokDetailView';

const DaftarKelompokDetail = ({ record, ...restProps }) => {
	return (
		<DaftarKelompokDetailView {...restProps} {...record} />
	);
};

export default DaftarKelompokDetail;
