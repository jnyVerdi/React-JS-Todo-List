import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {
  constructor() {
    super();
    this.state = {
      isUpdate: false,
      title: '',
      isDelete: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  handleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleModal(modalName) {
    const { isUpdate, isDelete } = this.state;
    if (modalName === 'update') {
      this.setState({ isUpdate: !isUpdate });
    } else {
      this.setState({ isDelete: !isDelete });
    }
  }

  render() {
    const { item } = this.props;
    return (
      <ul>
        <li key={item.id}>{item.title}</li>
        <div>
          <button type="button" onClick={this.handleModal('update')}>{item.isComplete ? 'Undo Complete' : 'Complete'}</button>
          <button type="button">Update</button>
          <button type="button">Delete</button>
        </div>
      </ul>
    );
  }

  // Props Validation
}

export default List;

List.propTypes = {
  item: PropTypes.objectOf.isRequired,
};
