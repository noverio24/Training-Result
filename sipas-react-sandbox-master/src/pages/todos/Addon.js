import React, { useRef, useCallback, memo } from 'react';
import Subtitle from './Addon.components/Subtitle';

type Props = {
	handleAdd: () => void,
};

const Addon = ({ handleAdd }: Props) => {
	const inputRef = useRef(null);
	const _onKeyDown = useCallback(
		e => {
			if (e.key === 'Enter' && inputRef.current.value !== '') {
				handleAdd(inputRef.current.value);
				inputRef.current.value = '';
			}
		},
		[handleAdd]
	);

	return (
		<div>
			<input
				type='text'
				ref={inputRef}
				onKeyDown={_onKeyDown}
				placeholder={'masukkan todo..'}
			></input>
			<Subtitle />
		</div>
	);
};

export default memo(Addon);
