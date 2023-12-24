import React from "react";

export default class Todo extends React.Component {
  handleClick = () => {
    this.props.toggleTodo(this.props.todo.id);
    console.log(this.props.hide);
  };
  render() {
    return (
      <>
        {this.props.hide ? null : (
          <li onClick={this.handleClick}>
            {this.props.todo.name}
            {this.props.todo.completed ? " ✔️" : ""}
          </li>
        )}
      </>
    );
  }
}
