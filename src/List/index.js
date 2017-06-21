import React, { Component } from "react";
import "./List.css";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  };

  handleChange = (event) => {
    const newTodo = event.target.value;

    // return key was pressed
    if (newTodo !== "" && event.keyCode === 13) {
      const { todos } = this.state;
      todos.push(newTodo);
      this.setState({
        todos
      });
    }
  }

  handleSubmit(event){
    event.preventDefault();
  }

  render() {
    return (
      <form className="Todo" onSubmit={this.handleSubmit}>
        <input placeholder="Neues Todo" type="text" onKeyUp={this.handleChange}/>
        <h2>Meine TODOs</h2>
        <ul className="todos">
          {this.state.todos.map(todo =>
             <li>{ todo }</li>
          )}
        </ul>
      </form>
    );
  }
}

export default List;
