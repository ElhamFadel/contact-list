import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

const filterImportData = person => {
  const {name, picture, phone, cell, email} = person;
  return {
    id: uuidv4(),
    name: `${capitalize(name.first)} ${capitalize(name.last)}`,
    avatar: picture.large,
    phone,
    cell,
    email,
    favorite: Math.random() >= 0.5, // to create list favorite randomely
  };
};

export {filterImportData};
