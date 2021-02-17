// @flow
import React from 'react';
import AgendaArsipBebasDetailView from './AgendaArsipBebasDetailView';

const AgendaArsipBebasDetail = ({ record, ...restProps }) => {
	return (
		<AgendaArsipBebasDetailView {...restProps} {...record} />
	);
};

export default AgendaArsipBebasDetail;
