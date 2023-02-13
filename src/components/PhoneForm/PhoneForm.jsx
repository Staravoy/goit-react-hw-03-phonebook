import PropTypes from 'prop-types';
import css from '../PhoneForm/PhoneForm.css';
import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onHandleSubmit = event => {
    event.preventDefault();
    let contactForAdd = { name: this.state.name, number: this.state.number };
    this.props.onSubmitData(contactForAdd);

    this.reset();
  };

  onHandleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <form onSubmit={this.onHandleSubmit} className={css.form}>
        <label>
          Name:
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.onHandleChange}
          />
        </label>
        <label>
          Number:
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.number}
            onChange={this.onHandleChange}
          />
        </label>

        <button className={css.buttonAdd} type="submit">
          add contact
        </button>
      </form>
    );
  }
};

PhoneForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
export default PhoneForm;