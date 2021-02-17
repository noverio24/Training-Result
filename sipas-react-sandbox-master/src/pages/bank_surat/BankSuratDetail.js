// @flow
import React, { useState, useEffect } from 'react';
import BankSuratDetailView from './BankSuratDetailView';

const BankSuratDetail = ({ record, ...restProps }) => {
	const [{ useStore }] = useState({});
	const [recordData, recordActions] = useStore();
	
	useEffect(() => {
		recordActions.load(record)
	}, [recordActions, record]);

	return (
		<BankSuratDetailView {...restProps} data={recordData} />
	);
};

export default BankSuratDetail;