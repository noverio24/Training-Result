// @flow
import React, { useState, useEffect } from 'react';
import PimpinanDetailView from './PimpinanDetailView';

const PimpinanDetail = ({ record, ...restProps }) => {
	const [{ useStore }] = useState({});
	const [recordData, recordActions] = useStore();
	
	useEffect(() => {
		recordActions.load(record)
	}, [recordActions, record]);

	return (
		<PimpinanDetailView {...restProps} data={recordData} />
	);
};

export default PimpinanDetail;