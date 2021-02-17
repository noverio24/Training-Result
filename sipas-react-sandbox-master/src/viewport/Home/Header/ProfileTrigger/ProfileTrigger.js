import React, { memo } from 'react';
import { connect, selectProfilePictureUrl } from 'reducers/Session';
import ProfileTriggerView from './ProfileTriggerView';

const ProfileTrigger = ({profilePictureUrl, ...props}) => {
	return <ProfileTriggerView {...props} url={profilePictureUrl} />;
};

const mapState = state => ({
	profilePictureUrl: selectProfilePictureUrl(state)
});

export default connect(mapState, null)(memo(ProfileTrigger));
