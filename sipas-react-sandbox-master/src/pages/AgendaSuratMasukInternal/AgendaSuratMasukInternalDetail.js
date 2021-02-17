// @flow
import React from 'react';
import AgendaSuratMasukInternalDetailView from './AgendaSuratMasukInternalDetailView';

const AgendaSuratMasukInternalDetail = ({ record, ...restProps }) => {
	return (
		<AgendaSuratMasukInternalDetailView {...restProps} {...record} />
	);
};

export default AgendaSuratMasukInternalDetail;
