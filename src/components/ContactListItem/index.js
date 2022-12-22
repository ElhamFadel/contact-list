import {StyleSheet, Text, TouchableHighlight, Image, View} from 'react-native';
import colors from '../../theme/colors';
import styles from './style';
import React from 'react';
import useContacts from '../../hooks/useContacts';

const ContactListItem = ({onPress}) => {
  const [data] = useContacts();
  return (
    <TouchableHighlight
      underlayColor={colors.grey}
      onPress={onPress}
      style={styles.container}>
      <View style={styles.containerContent}>
        <Image source={require('../../assets/img.jpg')} style={styles.avatar} />
        <View style={{marginLeft: 20}}>
          <Text style={styles.title}>Elham Fadel</Text>
          <Text style={styles.subTitle}>(790) 597853623</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default ContactListItem;
