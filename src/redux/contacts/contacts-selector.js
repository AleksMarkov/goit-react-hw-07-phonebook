export const selectAllContacts = store => store.contacts;

export const selectFilteredContacts = store => {
  const { contacts, filter } = store;
  if (!filter) {
    return contacts;
  }
  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = contacts.filter(contacts => {
    const normolizedName = contacts.name.toLowerCase();
    return normolizedName.includes(normalizedFilter);
  });
  return filteredContacts;
};
