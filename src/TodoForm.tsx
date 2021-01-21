import React from 'react';
import Todo from './Todo';

interface Props {
    onSubmit: (todo: Todo)=> void,
    title?: string,
    text?: string

}

interface State {
    title?: string,
    text?: string
}

export default class TodoForm extends React.Component<Props, State>{

    constructor(props: Props) {
        super(props);

        this.state = {
            title: props.title,
            text: props.text
        };
    }

    handleInputTitle(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            title: e.target.value
        });
    }

    handleInputText(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            text: e.target.value
        });
    }

    handleSubmit() {
        let title = this.state.title;
        let text = this.state.text;
        if (title !== null && title?.length && text !== null && text?.length) {
            this.props.onSubmit({title: title, text: text});
        }
    }

    render() {
        return (
            <div>
                <div>
                    title:<input type="text" onChange={this.handleInputTitle} value={this.state.title} />
                </div>
                <div>
                    text:<input type="text" onChange={this.handleInputText} value={ this.state.text } />
                </div>
                <div>
                    <button onClick={ this.handleSubmit }>保存</button>
                </div>
            </div>
        );
    }
}