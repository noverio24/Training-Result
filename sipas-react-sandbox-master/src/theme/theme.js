import React from 'react';

const Colors = {
	BLUE: 'blue',
	GREEN: 'green'
};

const getColor = c => {
	return Colors[c];
};

export default Colors;
export { getColor };

// --

// import { useColor } from 'sipas/use-color';
import Colors from 'Colors';
import { withColor } from 'sipas/with-color';

const MyButton = ({colors}) => {

    
};

export default withColor(Colors)(MyButton)