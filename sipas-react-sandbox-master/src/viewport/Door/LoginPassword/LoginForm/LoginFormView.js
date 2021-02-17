import React, { memo, useCallback } from 'react';
import classnames from 'classnames';
import { Form, Input, Button } from 'antd';
import { UserOutlined, KeyOutlined } from '@ant-design/icons';
import Featurable from 'system/Featurable';
import { withTranslation } from 'react-i18next';

import './LoginFormView.scss';

type Props = {
	loading?: boolean,
	handleAuth?: () => void,
	handleFailed?: () => void,
};

const LoginFormView = ({
	loading,
	handleAuth,
	handleFailed,
	t,
	...props
}: Props) => {
	const handleFinish = useCallback(
		values => {
			handleAuth(values);
		},
		[handleAuth]
	);

	const handleFinishFailed = useCallback(
		err => {
			handleFailed(err);
		},
		[handleFailed]
	);

	return (
		<Form
			onFinish={handleFinish}
			onFinishFailed={handleFinishFailed}
			className={classnames('LoginFormView')}
		>
			<Form.Item
				name='username'
				rules={[{ required: true, message: t('MASUKKAN_AKUN!') }]}
			>
				<Input
					placeholder={t('AKUN')}
					prefix={<UserOutlined style={{ marginRight: '1rem' }} />}
					disabled={loading}
				/>
			</Form.Item>
			<Form.Item
				name='password'
				rules={[{ required: true, message: t('MASUKKAN_SANDI!') }]}
			>
				<Input
					placeholder={t('SANDI')}
					prefix={<KeyOutlined style={{ marginRight: '1rem' }} />}
					disabled={loading}
					type='password'
				/>
			</Form.Item>
			<Featurable name='forgot_password'>
				<Form.Item name='remember' valuePropName='checked'>
					{/* <Checkbox disabled={loading}>Ingat saya</Checkbox> */}
					<Button
						disabled={loading}
						type='link'
						className={classnames('forgotpasswordLink')}
					>
						{t('LUPA_PASSWORD')}
					</Button>
				</Form.Item>
			</Featurable>
			<Form.Item>
				<Button
					loading={loading}
					type='primary'
					htmlType='submit'
					className={classnames('loginButton')}
				>
					{t('MASUK')}
				</Button>
			</Form.Item>
		</Form>
	);
};

LoginFormView.defaultProps = {
	loading: false,
	handleAuth: () => {},
	handleFailed: () => {},
};

export default withTranslation()(memo(LoginFormView));
