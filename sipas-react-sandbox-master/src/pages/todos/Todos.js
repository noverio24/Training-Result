import React, { memo } from 'react';
import { useImmerReducer } from 'use-immer';
import { List } from 'immutable';
import { Page } from 'viewport';
import TodoRecord from './TodoRecord';
import Todo from './Todo';
import Addon from './Addon';
import './Todos.scss';

/**
 * `Todos` Component
 * this is Container/Controller component
 */
const initialTodos = new List(
	[
		{ id: 1, text: 'makan', completed: true },
		{ id: 2, text: 'minum', completed: true },
		{ id: 3, text: 'joged', completed: false },
		{ id: 4, text: 'joging', completed: false }
	].map(raw => new TodoRecord(raw))
);

// const initialTodos = List();

const reducer = (draft, action) => {
	switch (action.type) {
		case 'addTodo':
			const newTodo = new TodoRecord({
				text: action.payload
			});
			draft.todos = draft.todos.insert(0, newTodo);
			return;
		case 'toggleTodo':
			const updatedTodo = draft.todos.get(action.todoIndex).toggleComplete();
			draft.todos = draft.todos.set(action.todoIndex, updatedTodo);
			return;
		case 'deleteTodo':
			draft.todos = draft.todos.delete(action.todoIndex);
			return;
		case 'resetTodos':
			draft.todos = draft.todos.delete(action.todoIndex);
			return;
		default:
			return;
	}
};

// const TodoList = memo(({ todos, handleToggle, handleDelete }) => (
// 	<>
// 		{todos.map((todo, i) => (
// 				<Todo
// 					key={i}
// 					text={todo.get('text')}
// 					completed={todo.isComplete()}
// 					handleToggle={handleToggle.bind(this, { type: 'toggleTodo', todoIndex: i })}
// 					handleDelete={handleDelete.bind(this, { type: 'deleteTodo', todoIndex: i })}
// 				/>
// 			))}	
// 	</>
// ));

const Todos = memo(() => {
	const [{ todos }, dispatch] = useImmerReducer(reducer, {
		todos: initialTodos
	});

	const insertTodo = payload => dispatch({ type: 'addTodo', payload: payload });
	const handleToggle = todoId => dispatch({ type: 'toggleTodo', todoIndex: todoId })
	const handleDelete = todoId => dispatch({ type: 'deleteTodo', todoIndex: todoId })

	// return null;
	return (
		<>
			<Addon handleAdd={insertTodo} />
			{/* <TodoList todos={state.todos} handleToggle={x=>null} handleDelete={x=>null} /> */}
			{todos.map((todo, i) => (
				<Todo
					key={todo.get('id')}
					text={todo.get('text')}
					completed={todo.isComplete()}
					handleToggle={handleToggle.bind(this, todo.get('id'))}
					handleDelete={handleDelete.bind(this, todo.get('id'))}
				/>
			))}
		</>
	);
});

const TodosPage = () => (
	<Page name='Todos' title='Todos (react-model implementation)'>
		<Todos />
	</Page>
);

export default TodosPage;
