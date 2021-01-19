import React from 'react';
import Todo from './Todo';
import TodoItem from './TodoItem';

interface Props {
    todos: Array<Todo>
}

export default class TodoList extends React.Component<Props, {}>{

    createTodos() {
        return this.props.todos.map((e: Todo) => {
            return <TodoItem todo={e} />
        });
    }

    render() {
        return (<>{this.createTodos()}</>);
    }
}