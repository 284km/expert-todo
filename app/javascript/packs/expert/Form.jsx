import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input type="text" placeholder="title"/><br/>
          <textarea placeholder="description" rows="8"></textarea><br/>
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}
