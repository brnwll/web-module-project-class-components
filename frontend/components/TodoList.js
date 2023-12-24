import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        TodoList
        <ul>
          {this.props.todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              toggleTodo={this.props.toggleTodo}
              hide={this.props.hideCompleted && todo.completed}
            />
          ))}
        </ul>
      </div>
    );
  }
}
