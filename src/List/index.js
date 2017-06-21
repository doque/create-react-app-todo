import React, { Component } from "react";
import "./List.css";

class List extends Component {
  state = {
    todos: []
  };

  handleChange = event => {
    const newTodo = event.target.value;

    // return key was pressed
    if (newTodo !== "" && event.keyCode === 13) {
      this.setState({
        todos: this.state.todos.concat(newTodo)
      });
    }
  };

  handleSubmit(event) {
    event.preventDefault();
  }

  removeTodo = todo => {
    const { todos } = this.state;
    todos.splice(todos.indexOf(todo), 1);
    this.setState({ todos });
  };

  render() {
    return (
      <form className="Todo" onSubmit={this.handleSubmit}>

        <input
          placeholder="Neues Todo"
          type="text"
          onKeyUp={this.handleChange}
        />

        <h4>Meine Todos:</h4>

        <ul className="todos">
          {this.state.todos.length === 0 && <span>Nothing yet!</span>}

          {this.state.todos.map(todo =>
            <li className={todo.completed ? "completed" : ""}>
              {todo.text}
              <span onClick={() => this.removeTodo(todo)}> x </span>
            </li>
          )}
        </ul>
      </form>
    );
  }
}

export default List;
