// @flow
import React, { useState, useEffect } from 'react';
import AsistenDetailView from './AsistenDetailView';

const AsistenDetail = ({ record, ...restProps }) => {
	const [{ useStore }] = useState({});
	const [recordData, recordActions] = useStore();
	
	useEffect(() => {
		recordActions.load(record)
	}, [recordActions, record]);

	return (
		<AsistenDetailView {...restProps} data={recordData} />
	);
};

export default AsistenDetail;