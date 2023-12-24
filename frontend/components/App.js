import React from "react";
import TodoList from "./TodoList";
import Form from "./Form";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  addTodo = (todo) => {
    const newTodo = {
      id: Date.now(),
      name: todo,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  toggleTodo = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    });
  };

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} />
        <Form addTodo={this.addTodo} />
        <button>Hide Completed</button>
      </div>
    );
  }
}
