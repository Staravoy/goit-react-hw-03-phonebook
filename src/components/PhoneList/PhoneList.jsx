import PropTypes from 'prop-types';
import css from '../PhoneList/PhoneList.css';

export const PhoneList = ({ contacts, onRemoveContact }) => {
  return (
    <>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {`${contact.name} : ${contact.number}`}
            <button
              className={css.buttonDel}
              type="button"
              name="delete"
              onClick={() => onRemoveContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

PhoneList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};