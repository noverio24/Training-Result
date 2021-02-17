import React, { memo } from 'react';
import { withTranslation } from 'react-i18next';
import { Result } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { Page } from 'viewport';

const DefaultPage = ({t}) => (
	<Page centerContent>
		<Result
			icon={<SettingOutlined />}
			title={t('menu.PENGATURAN')}
			subTitle={t('pengaturan.HALAMAN_KOSONG_INFO')}
		/>
	</Page>
);

export default withTranslation()(memo(DefaultPage));
