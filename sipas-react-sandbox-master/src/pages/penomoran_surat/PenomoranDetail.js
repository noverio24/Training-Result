// @flow
import React, { useState, useEffect } from 'react';
import PenomoranDetailView from './PenomoranDetailView';

const PenomoranDetail = ({ record, ...restProps }) => {
	const [{ useStore }] = useState({});
	const [recordData, recordActions] = useStore();
	
	useEffect(() => {
		recordActions.load(record)
	}, [recordActions, record]);

	return (
		<PenomoranDetailView {...restProps} data={recordData} />
	);
};

export default PenomoranDetail;