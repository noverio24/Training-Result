// @flow
import React, { memo } from 'react';
import { Page } from 'viewport';
import './ProfileView.scss';

type Props = {
	name?: string,
};

const ProfileView = ({ name }: Props) => (
	<Page name='ProfileView' title='Profil Saya'>
		<span>
			Hi <h2>{name}</h2>
		</span>
	</Page>
);

export default memo(ProfileView);
