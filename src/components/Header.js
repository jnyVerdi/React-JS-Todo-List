import React, { Component } from 'react';

class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>Todo List - React JS</h2>
        <h4>
          Developed by
          <a href="https://github.com/jnyVerdi" target="_blank" rel="noreferrer"> jnyVerdi</a>
        </h4>
      </div>
    );
  }
}

export default Header;
