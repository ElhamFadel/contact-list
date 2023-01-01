import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  ContactsScreen,
  FavoritesScreen,
  ProfileScreen,
  UserScreen,
} from './routes';
const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <BottomTab.Navigator initialRouteName="Contact-list">
    <BottomTab.Screen
      name="Contact-list"
      component={ContactsScreen}
      options={({navigation}) => ({
        headerShown: false,
        tabBarIcon: () => <HomeTabBar color={color} />,
      })}
    />
  </BottomTab.Navigator>
);
