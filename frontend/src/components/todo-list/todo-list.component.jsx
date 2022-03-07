// Components
import TodoItem from '../todo-item/todo-item.component';

import classes from './todo-list.styles.module.css';

const TodoList = ({ items, onEditTodo, onDeleteTodo }) => {
	console.log("items",items)
	return (
		<div className={classes.list}>
			{/* Render list of todos */}
			{items.length > 0 &&
				items.map(({ id, toDo }) => (
					
					<TodoItem
						key={id}
						id={id}
						content={toDo}
						onEditHandler={onEditTodo}
						onDeleteHandler={onDeleteTodo}
					/>
				))}

			{/* Show message if list is empty */}
			{items.length === 0 && (
				<p className={classes.message}>No pending To Do's</p>
			)}
		</div>
	);
};

export default TodoList;
