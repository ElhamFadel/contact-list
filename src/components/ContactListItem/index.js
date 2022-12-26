import {Text, TouchableHighlight, Image, View} from 'react-native';
import colors from '../../theme/colors';
import styles from './style';
import React from 'react';

const ContactListItem = ({name, id, avatar, phone, onPress}) => {
  return (
    <TouchableHighlight
      id={id}
      underlayColor={colors.grey}
      onPress={onPress}
      style={styles.container}>
      <View style={styles.containerContent}>
        <Image source={{uri: `${avatar}`}} style={styles.avatar} />
        <View style={{marginLeft: 20}}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subTitle}>{phone}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default ContactListItem;
