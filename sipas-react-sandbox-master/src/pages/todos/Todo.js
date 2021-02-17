import React from 'react';
import classnames from 'classnames';
import './Todo.scss';

type Props = {
	text: string,
	completed?: boolean,
	handleToggle?: () => void,
	handleDelete?: () => void,
};

const Todo = ({ text, completed, handleToggle, handleDelete }: Props) => {
	return (
		<div
			className={classnames('Todo', {
				completed: completed,
			})}
		>
			<button onClick={handleDelete}>x</button>&nbsp;
			<span onClick={handleToggle}>{text}</span>
		</div>
	);
};

export default Todo;
