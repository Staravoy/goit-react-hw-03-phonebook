import PropTypes from 'prop-types';
import css from '../PhoneList/PhoneList.css';
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class PhoneList extends Component {
  deleteId = Id => {
    this.props.del(Id);
  };
  createList = () => {
    return this.props.contacts.map(contact => {
      return (
        <li key={uuidv4()} id={contact.id}>
          {`${contact.name}: ${contact.number}`}
          <button
            data-id={contact.id}
            onClick={() => this.deleteId(contact.id)}
          >
            Delete
          </button>
        </li>
      );
    });
  };

  render() {
    return <ul>{this.createList()}</ul>;
  }
};

PhoneList.propTypes = {
  contacts: PropTypes.array.isRequired,
  del: PropTypes.func.isRequired,
};
PhoneList.defaultProps = {
  contacts: [],
};
export default PhoneList;