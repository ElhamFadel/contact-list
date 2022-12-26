import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import ProfileScreen from './src/screens/ProfileScreen';
import AppNavigator from './src/routes';

const App = () => {
  return <AppNavigator />;
};

export default App;
