import React, { memo } from 'react';
import classnames from 'classnames';
import { withTranslation } from 'react-i18next';
import { Button } from 'antd';
import './LogoutButtonView.scss';

type Props = {
	isLoading: boolean,
	handleLogout: () => void,
};

const LogoutButtonView = ({ isLoading, handleLogout, t, ...props }: Props) => (
	<Button
		type='link'
		loading={isLoading}
		onClick={handleLogout}
		className={classnames('LogoutButtonView')}
	>
		{t('menu.KELUAR_APLIKASI')}
	</Button>
);

LogoutButtonView.defaulProps = {
	isLoading: false,
};

export default withTranslation()(memo(LogoutButtonView));
