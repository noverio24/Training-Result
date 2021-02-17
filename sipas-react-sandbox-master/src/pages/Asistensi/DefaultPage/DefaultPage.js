import React, { memo } from 'react';
import { withTranslation } from 'react-i18next';
import { Result } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { Page } from 'viewport';

const DefaultPage = ({t}) => (
	<Page centerContent>
		<Result
			icon={<SmileOutlined />}
			// title={t('ASISTENSI')}
			subTitle={t('Tidak ada data')}
		/>
	</Page>
);

export default withTranslation()(memo(DefaultPage));
