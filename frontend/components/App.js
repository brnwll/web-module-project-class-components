import React from "react";
import TodoList from "./TodoList";
import Form from "./Form";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      hideCompleted: false,
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

  toggleHideCompleted = () => {
    this.setState({ hideCompleted: !this.state.hideCompleted });
  };

  render() {
    return (
      <div>
        <TodoList
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
          hideCompleted={this.state.hideCompleted}
        />
        <Form addTodo={this.addTodo} />
        <button onClick={this.toggleHideCompleted}>
          {this.state.hideCompleted ? "Show Completed" : "Hide Completed"}
        </button>
      </div>
    );
  }
}
