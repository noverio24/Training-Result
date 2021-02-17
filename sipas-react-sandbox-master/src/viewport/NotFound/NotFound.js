import React, { memo } from 'react';
import { useHistory } from "react-router-dom";
import NotFoundView from './NotFoundView';

const NotFound = () => {
    let history = useHistory();
    const handleBack = () => {
        history.goBack()
    }

	return <NotFoundView handleBack={handleBack}/>;
};

export default memo(NotFound);