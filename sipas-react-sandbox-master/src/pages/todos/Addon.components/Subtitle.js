import React, { memo } from 'react';

const _Subtitle = () => (
	<div
		style={{
			fontStyle: 'italic',
			fontWeight: 300,
			fontSize: '11px'
		}}>
		* Tekan `enter` untuk menambahkan <strong>Todo</strong>
	</div>
);

export default memo(_Subtitle)