import React, { Component } from 'react';
import Form from './expert/Form';
import TodoList from './expert/TodoList';
import axios from "axios"

export default class App2 extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const title = e.target.elements[0].value;
    if (!title) {
      return;
    }
    const desc = e.target.elements[1].value;
    const todos = this.state.todos.slice()

let token = document.getElementsByName('csrf-token')[0].getAttribute('content')
axios.defaults.headers.common['X-CSRF-Token'] = token
axios.defaults.headers.common['Accept'] = 'application/json'
const url = "/tasks"
const data = { title: title, description: desc }
axios.post(url, data).then(response => response.data);

    todos.push({
      title: title,
      desc: desc,
      done: false
    });
    this.setState({ todos: todos });
  }

  render() {
    return (
      <div>
        <h1>app2</h1>
        <Form onSubmit={this.handleSubmit.bind(this)} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}
