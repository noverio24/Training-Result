// @flow
import React, { useState, useEffect } from 'react';
import PengaturanSistemDetailView from './PengaturanSistemDetailView';

const PengaturanSistemDetail = ({ record, ...restProps }) => {
	const [{ useStore }] = useState({});
	const [recordData, recordActions] = useStore();
	
	useEffect(() => {
		recordActions.load(record)
	}, [recordActions, record]);

	return (
		<PengaturanSistemDetailView {...restProps} data={recordData} />
	);
};

export default PengaturanSistemDetail;