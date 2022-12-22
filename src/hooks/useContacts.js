import {useEffect, useReducer} from 'react';
import {fetchContacts} from '../api/getters';

const intialState = {
  contacts: [],
  isLoading: false,
  error: false,
};

function reducer(state = intialState, action) {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        isLoading: true,
      };
    case 'FINISH':
      return {
        ...state,
        isLoading: false,
      };
    case 'ERORR':
      return {};
    default:
      return state;
  }
}
export const handleFetchData = async () => {
  const contacts = await fetchContacts({results: 100, seed: 'fullstackio'});
  return contacts;
};
const useContacts = () => {
  const [data, dispatch] = useReducer(intialState);

  useEffect(() => {
    dispatch({type: 'LOADING'});
    try {
      const contacts = handleFetchData();
      console.log(contacts);
    } catch (err) {
      console.log(err);
    }
  }, []);
  return [data];
};

export default useContacts;
