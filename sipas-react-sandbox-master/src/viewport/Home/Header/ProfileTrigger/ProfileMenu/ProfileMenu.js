import React, {memo} from 'react';
import ProfileMenuView from './ProfileMenuView'

const ProfileMenu = props => {
    return <ProfileMenuView {...props}/>
}

export default memo(ProfileMenu)