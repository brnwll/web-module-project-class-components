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

  render() {
    return (
      <div>
        <TodoList />
        <Form />
      </div>
    );
  }
}
