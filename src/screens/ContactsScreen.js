import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import useContacts from '../hooks/useContacts';
import ContactListItem from '../components/ContactListItem';

const renderContacts = ({item, navigation}) => {
  const {id, name, avatar, phone} = item;
  return (
    <ContactListItem
      name={name}
      id={id}
      avatar={avatar}
      phone={phone}
      onPress={() => navigation.navigate('Profile', {id})}
    />
  );
};
const ContactsScreen = () => {
  const [data] = useContacts();
  const {contacts, isLoading, error} = data;

  return (
    <View style={styles.container}>
      // there's unlogiacall here okay
      {!isLoading && <ActivityIndicator size="large" />}
      {error && <Text>Something Happen try again ...</Text>}
      {!error && isLoading && (
        <FlatList
          data={contacts}
          renderItem={renderContacts}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

export default ContactsScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
