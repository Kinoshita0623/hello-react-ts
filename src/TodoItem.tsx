import React from 'react';
import Todo from './Todo';

interface Props {
    todo: Todo,
    onComplete: (todoId: number) => void
}

class TodoItem extends React.Component<Props, {}>{

    handleComplete = () => {
        this.props.onComplete(this.props.todo.id);
    }

    render() {
        return (
            <div> 
                <h3>{ this.props.todo.title }</h3>
                <p> {this.props.todo.text}</p>
                <input type="checkbox" onChange={ this.handleComplete } checked={ this.props.todo.complete } />
            </div>
        );
    }
}

export default TodoItem;