import {USERS_HTTP_REQUEST} from './config';

const fetchContacts = (append_to_response = '') => {
  return USERS_HTTP_REQUEST.get(
    '',
    append_to_response ? {params: {...append_to_response}} : null,
  );
};

export {fetchContacts};
