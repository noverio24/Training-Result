import React, { memo, isValidElement } from 'react';
import { assess } from 'system/Utils';

const Render = ({ when, whenNot, fallback, children }) => {
    let passedWhen = true;
    let passedWhenNot = true;

	if('undefined' != typeof when)
	{
		passedWhen = assess(when);		
	}
	if('undefined' != typeof whenNot)
	{
		passedWhenNot = assess(whenNot);		
	}

	if(passedWhen && passedWhenNot)
    {
    	return children;
    }

    if('function' == typeof fallback)
	{
		return fallback();
	}
	else if(isValidElement(fallback))
	{
		return fallback
	}

};

export default memo(Render);