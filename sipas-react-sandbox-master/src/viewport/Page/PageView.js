// @flow
import React, { memo, isValidElement } from 'react';
import type { Node } from 'react';
import classnames from 'classnames';
import { Layout, PageHeader } from 'antd';
import './PageView.scss';

type Props = {
	name: string,
	title?: string | Node,
	subtitle?: string,
	headerExtra?: Node,
	headerContent?: Node,
	plain?: boolean,
	centerContent?: boolean,
	scrollableVertical?: boolean,
	scrollableHorizontal?: boolean,
	children?: Node,
};

const PageView = ({
	name,
	title,
	subtitle,
	headerExtra,
	headerContent,
	plain,
	centerContent,
	scrollableVertical,
	scrollableHorizontal,
	children,
	...restProp
}: Props) => (
	<Layout
		{...restProp}
		className={classnames('PageView', name, {
			plain,
			scrollableHorizontal,
			scrollableVertical,
			centerContent,
		})}
	>
		{'string' == typeof title ? (
			<PageHeader
				title={title}
				subTitle={subtitle}
				extra={headerExtra}
				style={{
					borderBottom: '1px solid rgb(235, 237, 240)',
					marginBottom: '16px',
					paddingLeft: 0,
					paddingRight: 0,
				}}
			>
				{headerContent}
			</PageHeader>
		) : isValidElement(title) ? (
			{ title }
		) : null}
		{children}
	</Layout>
);

PageView.defaultProps = {
	name: 'Page',
	title: null,
	subtitle: null,
	headerExtra: null,
	headerContent: null,
	plain: false,
	centerContent: false,
	scrollableVertical: false,
	scrollableHorizontal: false,
};

export default memo(PageView);
