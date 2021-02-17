import React, { memo } from 'react';
import { Spin } from 'antd';
import Page from 'viewport/Page';
import './CurtainView.scss'

const CurtainView = () => (
	<Page centerContent plain name="CurtainView">
		<Spin size='large' />
	</Page>
);

CurtainView.propTypes = {};

CurtainView.defaultProps = {};

export default memo(CurtainView);
