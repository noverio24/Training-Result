import React, { memo } from 'react';
import classnames from 'classnames';
import { Button, Row, Col } from 'antd';
import { withTranslation } from 'react-i18next';
import Featurable from 'system/Featurable';
import LoginForm from './LoginForm';

import './LoginPasswordView.scss';

const LoginPasswordView = ({ t }) => (
	<div className={classnames('LoginPasswordView')}>
		<Row align='middle'>
			<Col span={12} className={classnames('leftContent')}>
				<div className={classnames('logo')}></div>
			</Col>
			<Col span={12} className={classnames('rightContent')}>
				<div className={classnames('formTitle')}>{t('SILAHKAN_MASUK')}</div>
				<LoginForm />
				<div>
					<Featurable
						name='register'
						fallback={<span>Member Register will be available after 5 seconds</span>}>
						<span>{t('BELUM_PUNYA_AKUN?')}</span>
						<Button type='link'>{t('DAFTAR_SEKARANG')}</Button>
					</Featurable>
				</div>
			</Col>
		</Row>
	</div>
);

LoginPasswordView.propTypes = {};
LoginPasswordView.defaultProps = {};

export default withTranslation()(memo(LoginPasswordView));
