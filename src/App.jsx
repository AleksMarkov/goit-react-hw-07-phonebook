import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

import {
  fetchContacts,
  addContact,
  deleteContact,
} from './redux/contacts/contacts-operations';

import { setFilter } from './redux/filter/filter-slice';
import { selectAllContacts } from './redux/contacts/contacts-selector';

import styles from './app.module.css';

const App = () => {
  const { items, isLoading, error } = useSelector(selectAllContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  const onAddContact = data => {
    dispatch(addContact(data));
  };

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const changeFilter = ({ target }) => dispatch(setFilter(target.value));

  return (
    <div className={styles.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onAddContact} />
      <h2>Contacts</h2>
      <Filter changeFilter={changeFilter} />
      {isLoading && <p>...Loading</p>}
      {error && <p>{error} </p>}
      {Boolean(items.length) && (
        <ContactList items={items} deleteContact={onDeleteContact} />
      )}
    </div>
  );
};

export default App;
