import React from 'react';
import Todo from './Todo';

interface Props {
    todo: Todo
}

class TodoItem extends React.Component<Props, {}>{

    render() {
        return (
            <div> 
                <h3>{ this.props.todo.title }</h3>
                <p> { this.props.todo.text }</p>
            </div>
        );
    }
}

export default TodoItem;