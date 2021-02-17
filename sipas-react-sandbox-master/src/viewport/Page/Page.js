import React, { memo } from 'react';

import PageView from './PageView';

const Page = props => <PageView {...props} />;

export default memo(Page);