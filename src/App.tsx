import React from 'react';
import Bmi from './Bmi';
import Todo from './Todo';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

interface State {
  count: number,
  todos: Array<Todo>
}
class App extends React.Component<{}, State>{
  
  constructor(props: any) {
    super(props)
    this.state = {
      count: 0,
      todos: []
    };

  }

  completedTodos = ()=> {
    return this.state.todos.filter((todo) => todo.complete);
  }

  uncompleteTodos = () => {
    return this.state.todos.filter((todo) => !todo.complete);
  }

  handleSubmitTodo(todo: Todo) {
    let todos = this.state.todos.slice();
    todos.push(todo);
    this.setState({
      todos: todos
    });
  }

  handleOnCompleteTodo = (todoId: number) => {
    let todos = this.state.todos.slice();
    todos = todos.map((todo) => {
      if (todo.id === todoId) {
        let t = {
          ...todo
        }
        t.complete = !t.complete;
        return t;
      }
      return todo;
    });
    this.setState({
      todos: todos
    });
  }

  render() {
    return (<div>
      <p>{this.state.count}</p>
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>
        count up
      </button>
        <Bmi/>
      <div>
      </div>
      <h1>Todo</h1>
      <TodoList todos={this.state.todos} onCompleteTodo={ this.handleOnCompleteTodo }/>
      <TodoForm onSubmit={this.handleSubmitTodo.bind(this)} />
      
      <h2>達成済みTodo</h2>
      <TodoList todos={this.completedTodos()} onCompleteTodo={this.handleOnCompleteTodo} />
      <h2>未達成Todo</h2>
      <TodoList todos={this.uncompleteTodos()} onCompleteTodo={ this.handleOnCompleteTodo } />
    </div>);
  }
}


export default App;
