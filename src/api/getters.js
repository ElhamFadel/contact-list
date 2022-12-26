const fetchContacts = () =>
  fetch('https://randomuser.me/api/?results=100&seed=fullstackio').then(
    response => response.json(),
  );

const getRandomPerson = () =>
  fetch('https://randomuser.me/api/').then(response => response.json());
export {fetchContacts, getRandomPerson};
