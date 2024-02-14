export const selectContacts = state => state.contacts;

export const selectFilteredContacts = store => {
  const { contacts, filter } = store;
  const { items } = contacts;
  if (!filter) {
    return items;
  }
  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = items.filter(({ name }) => {
    const normolizedName = name.toLowerCase();
    return normolizedName.includes(normalizedFilter);
  });
  return filteredContacts;
};

// export const selectBooks = state => state.books;

// export const selectFilteredBooks = store => {
//     const { books, filter } = store;
//     const { items } = books;
//     if (!filter) {
//         return items;
//     }

//     const normalizedFilter = filter.toLowerCase();

//     const filteredBooks = items.filter(({ title, author }) => {
//         const normalizedTitle = title.toLowerCase();
//         const normalizedAuthor = author.toLowerCase();

//         return (normalizedAuthor.includes(normalizedFilter) || normalizedTitle.includes(normalizedFilter))
//     });

//     return filteredBooks
// }
