import React, { memo, useState } from 'react';
import { createStore as createFeatureStore } from 'system/Featurable';
import classnames from 'classnames';
import { Helmet } from 'react-helmet';
import { Layout } from 'antd';
import { Provider } from 'react-redux';
import { FeatureStore } from 'system/Featurable';
import ErrorBoundary from 'system/ErrorBoundary';
import { AbilityContext } from 'abl/ability-context';
import ability from 'abl/ability';
import Stage from './Stage';
import 'config/i18n';
import 'theme/theme.scss';
import './Viewport.scss';
import globalState, { persistor, PersistGate } from 'reducers/store'; 

const featureList = createFeatureStore({
	doorpassword: true,
	forgot_password: false,
	register: true
});

const Viewport = props => {
	const [pageTitle] = useState('SIPAS App');
	const [features] = useState(featureList);

	return (
		<ErrorBoundary>
			<Provider store={globalState}>
				<PersistGate loading={<div>load state</div>} persistor={persistor}>
					<Helmet>
						<title>{pageTitle}</title>
					</Helmet>
					<FeatureStore value={features}>
						<AbilityContext.Provider value={ability}>
							<Layout className={classnames('Viewport')}>
								<Stage />
							</Layout>
						</AbilityContext.Provider>
					</FeatureStore>
				</PersistGate>
			</Provider>
		</ErrorBoundary>
	);
};

export default memo(Viewport);
