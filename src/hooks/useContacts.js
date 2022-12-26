import {useEffect, useReducer} from 'react';
import {fetchContacts} from '../api/getters';
import {filterImportData} from '../utils';

const intialState = {
  contacts: [],
  isLoading: true,
  error: false,
};

function reducer(state = intialState, action) {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    case 'FINISH':
      return {
        isLoading: false,
        contacts: action.payload,
      };
    case 'ERORR':
      return {
        isLoading: false,
        error: action.message,
      };
    default:
      return state;
  }
}

// return contacts;
const useContacts = () => {
  const [data, dispatch] = useReducer(reducer, intialState);

  useEffect(() => {
    try {
      fetchContacts()
        .then(({results}) =>
          dispatch({
            type: 'FINISH',
            payload: results.map(person => filterImportData(person)),
          }),
        )
        .catch(error => dispatch({type: 'ERORR', message: error}))
        .finally(() => dispatch({type: 'LOADING', payload: true}));
    } catch (err) {
      console.error(err, 'erooooo');
    }
  }, []);
  return [data];
};

export default useContacts;
