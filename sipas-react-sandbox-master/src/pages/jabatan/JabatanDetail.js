// @flow
import React from 'react';
import JabatanDetailView from './JabatanDetailView';

const JabatanDetail = ({ record, ...restProps }) => {
	return (
		<JabatanDetailView {...restProps} {...record} />
	);
};

export default JabatanDetail;
