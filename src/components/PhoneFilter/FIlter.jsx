import Proptypes from 'prop-types';
import React, { Component } from 'react';

class Filter extends Component {
  setFilterValue = event => {
    let value = event.currentTarget.value.toUpperCase();
    this.props.setFilter(value);
  };

  render() {
  return (
    <>
      <label>
        Find contacts by name
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.setFilter}
        />
      </label>
    </>
  );
}};

Filter.propTypes = {
  value: Proptypes.string,
  onChangeFilter: Proptypes.func.isRequired,
};
export default Filter;