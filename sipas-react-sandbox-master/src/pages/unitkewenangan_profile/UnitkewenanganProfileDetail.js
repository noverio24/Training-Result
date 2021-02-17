// @flow
import React, { useState, useEffect } from 'react';
import UnitkewenanganProfileDetailView from './UnitkewenanganProfileDetailView';

const UnitkewenanganProfileDetail = ({ record, ...restProps }) => {
	const [{ useStore }] = useState({});
	const [recordData, recordActions] = useStore();
	
	useEffect(() => {
		recordActions.load(record)
	}, [recordActions, record]);

	return (
		<UnitkewenanganProfileDetailView {...restProps} data={recordData} />
	);
};

export default UnitkewenanganProfileDetail;