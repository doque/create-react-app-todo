import React, { Component } from "react";
import "./List.css";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  };

  /**
   * Reacts to onChange events
   */
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

  removeTodo = (todo) => {
    const { todos } = this.state;
    todos.splice(todos.indexOf(todo), 1);
    this.setState({ todos });
  }

  render() {
    return (
      <form className="Todo" onSubmit={this.handleSubmit}>
        
        <input placeholder="Neues Todo" type="text" onKeyUp={this.handleChange}/>

        <h4>Meine Todos:</h4>

        <ul className="todos">
          {this.state.todos.map(todo =>
             <li key={todo}>
              { todo }
              <span onClick={ () => this.removeTodo(todo) }> x </span>
              </li>
          )}
        </ul>
      </form>
    );
  }
}

export default List;
