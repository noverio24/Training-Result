// @flow
import React, { useState, useEffect } from 'react';
import AuditDetailView from './AuditDetailView';

const AuditDetail = ({ record, ...restProps }) => {
	const [{ useStore }] = useState({});
	const [recordData, recordActions] = useStore();
	
	useEffect(() => {
		recordActions.load(record)
	}, [recordActions, record]);

	return (
		<AuditDetailView {...restProps} data={recordData} />
	);
};

export default AuditDetail;