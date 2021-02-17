// @flow
import React from 'react';
import PostDetailView from './PostDetailView';

const PostDetail = ({ record, ...restProps }) => {
	return (
		<PostDetailView {...restProps} {...record} />
	);
};

export default PostDetail;
