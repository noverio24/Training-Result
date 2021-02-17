// @flow
import React from 'react';
import AgendaSuratKeluarInternalDetailView from './AgendaSuratKeluarInternalDetailView';

const AgendaSuratKeluarInternalDetail = ({ record, ...restProps }) => {
	return (
		<AgendaSuratKeluarInternalDetailView {...restProps} {...record} />
	);
};

export default AgendaSuratKeluarInternalDetail;
