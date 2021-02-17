// @flow
import React, { memo } from 'react';
import classnames from 'classnames';
import './Loader.scss';

type Props = {
	spinning?: boolean,
	fullscreen?: boolean,
	text?: string,
};

const Loader = ({ spinning, fullscreen, text }: Props) => (
	<div
		className={classnames('Loader', {
			hidden: !spinning,
			fullscreen: fullscreen,
		})}
	>
		<div className={'wrapper'}>
			<div className={'inner'} />
			<div className={'text'}>{text}</div>
		</div>
	</div>
);

Loader.defaultProps = {
	spinning: false,
	fullscreen: false,
	text: null,
};

export default memo<Props>(Loader);
