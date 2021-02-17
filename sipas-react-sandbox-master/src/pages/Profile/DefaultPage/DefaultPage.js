import React, { memo } from 'react';
import { withTranslation } from 'react-i18next';
import { Result } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Page } from 'viewport';

const DefaultPage = ({t}) => (
	<Page centerContent>
		<Result
			icon={<UserOutlined />}
			title={t('menu.PROFILE_SAYA')}
			subTitle={t('Halaman Kosong')}
		/>
	</Page>
);

export default withTranslation()(memo(DefaultPage));
