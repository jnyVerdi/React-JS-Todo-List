import React, { Component } from 'react';
import List from './components/List';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], title: '', isComplete: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleCreate(e) {
    const { items, title, isComplete } = this.state;
    e.preventDefault();
    const newItem = {
      id: items.length + 1,
      title,
      isComplete,
    };
    this.setState((state) => ({
      items: state.items.concat(newItem),
      title: '',
    }));
  }

  handleComplete(id) {
    const { items } = this.state;
    const newItems = [];
    items.map((item) => {
      const newItem = item;
      if (item.id === id) {
        newItem.isComplete = !item.isComplete;
        newItems.push(newItem);
      } else {
        newItems.push(item);
      }
      return newItems;
    });
    this.setState({ items: newItems });
  }

  handleUpdate(id, newTitle) {
    const { items } = this.state;
    const newItems = [];
    items.map((item) => {
      const newItem = item;
      if (item.id === id) {
        newItem.title = newTitle;
        newItems.push(newItem);
      } else {
        newItems.push(item);
      }
      return newItems;
    });
    this.setState({ items: newItems });
  }

  handleDelete(id) {
    const { items } = this.state;
    const newItems = [];
    items.map((item) => {
      if (item.id !== id) {
        return newItems.push(item);
      }
      return newItems;
    });
    this.setState({ items: newItems });
  }

  render() {
    const { items, title } = this.state;
    return (
      <div>
        <Header />
        <form onSubmit={this.handleCreate}>
          <label htmlFor="new-todo">
            Create a new task
            <input
              id="new-todo"
              onChange={this.handleChange}
              value={title}
            />
          </label>
          {title.length
            ? (<button type="submit">Create</button>)
            : (<button type="submit" disabled>Create</button>)}
        </form>
        <div>
          <h4>
            {items.length > 1 ? 'Tasks ' : 'Task '}
            to be done
          </h4>
          {items.map((item) => (
            <List
              key={item.id}
              item={item}
              handleComplete={this.handleComplete}
              handleUpdate={this.handleUpdate}
              handleDelete={this.handleDelete}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
