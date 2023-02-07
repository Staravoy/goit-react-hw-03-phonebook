import { PhoneForm } from "./PhoneForm/PhoneForm";
import { PhoneList } from "./PhoneList/PhoneList";
import { Filter } from "./PhoneFilter/FIlter";
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';


export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = number => {
    const searchRepeat = contacts
      .map(user => user.name.toLowerCase())
      .includes(number.name.toLowerCase());

    if (searchRepeat) {
      alert(`${number.name} is already in contacts`);
    } else {
      const contact = {
        ...number,
        id: nanoid(),
      };
      setContacts(prevState => [...prevState, contact]);
    }
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const changeFilter = filter => {
    setFilter(filter);
  };

  const removeContact = contactId => {
    setContacts(prevState => [
      ...prevState.filter(contact => contact.id !== contactId),
    ]);
  };

  return (
    <>
      <div>
        <h1>Phonebook:</h1>
        <PhoneForm addContact={addContact} />

        <h2>Contacts:</h2>
        <Filter value={filter} onChangeFilter={changeFilter} />
        <PhoneList
          contacts={getFilteredContacts()}
          onRemoveContact={removeContact}
        />
      </div>
    </>
  );
};