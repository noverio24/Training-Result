// @flow
import React, { memo } from 'react';
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { withTranslation } from 'react-i18next';
import Page from 'viewport/Page';
import { Warning } from 'components/message';
import './NotAllowedView.scss';

type Props = {
	handleBack?: () => void,
};

const NotAllowedView = ({ handleBack, t, ...props }: Props) => (
	<Page centerContent>
		<Warning title={t('AKSES_DILARANG')} />
		<Button onClick={handleBack}>
			<ArrowLeftOutlined />
			{t('KEMBALI')}
		</Button>
	</Page>
);

NotAllowedView.defaultProps = {
	handleBack: () => {},
};

export default withTranslation()(memo(NotAllowedView));
