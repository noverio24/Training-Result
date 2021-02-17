// @flow
import React from 'react';
import AgendaSuratMasukDetailView from './AgendaSuratMasukDetailView';

const AgendaSuratMasukDetail = ({ record, ...restProps }) => {
	return (
		<AgendaSuratMasukDetailView {...restProps} {...record} />
	);
};

export default AgendaSuratMasukDetail;
