import React from 'react';
import Todo from './Todo';
import TodoItem from './TodoItem';

interface Props {
    todos: Array<Todo>,
    onCompleteTodo: (todoId: number) => void
}

export default class TodoList extends React.Component<Props, {}>{

    handleOnComplete = (todoId: number) => {
            this.props.onCompleteTodo(todoId);
        
    }

    createTodos() {
        return this.props.todos.map((e: Todo) => {
            return <TodoItem todo={e} onComplete={this.handleOnComplete} key={ e.id } />
        });
    }

    render() {
        return (<>{this.createTodos()}</>);
    }
}