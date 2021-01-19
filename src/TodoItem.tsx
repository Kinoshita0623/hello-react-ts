import React from 'react';

interface Props {
    title: string,
    text: string
}

class TodoItem extends React.Component<Props, {}>{

    render() {
        return (
            <div> 
                <h3>{ this.props.title }</h3>
                <p> { this.props.text }</p>
            </div>
        );
    }
}

export default TodoItem;