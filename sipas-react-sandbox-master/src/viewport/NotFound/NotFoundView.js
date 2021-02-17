import React, { memo } from 'react';
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { withTranslation } from 'react-i18next';
import Page from 'viewport/Page';
import { Error404 } from 'components/message';
import './NotFoundView.scss';

type Props = {
	handleBack?: () => void,
};

const NotFoundView = ({ handleBack, t, ...props }: Props) => (
	<Page centerContent>
		<Error404 title={t('HALAMAN_TIDAK_DITEMUKAN')} />
		<Button onClick={handleBack}>
			<ArrowLeftOutlined />
			{t('KEMBALI')}
		</Button>
	</Page>
);

NotFoundView.defaultProps = {
	handleBack: () => {},
};

export default withTranslation()(memo(NotFoundView));
