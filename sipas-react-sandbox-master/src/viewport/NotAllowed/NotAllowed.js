import React, { memo } from 'react';
import { useHistory } from "react-router-dom";
import NotAllowedView from './NotAllowedView';

const NotAllowed = () => {
    let history = useHistory();
    const handleBack = () => {
        history.goBack()
    }

	return <NotAllowedView handleBack={handleBack}/>;
};

export default memo(NotAllowed);