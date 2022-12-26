import {StackNavigator} from 'react-navigation';

import {ContactsScreen, ProfileScreen} from './screens';

export default StackNavigator({
  Contacts: {
    screen: ContactsScreen,
  },
  Profile: {
    screen: ProfileScreen,
  },
});
