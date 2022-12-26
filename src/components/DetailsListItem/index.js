import {Text, TouchableHighlight, Image, View} from 'react-native';
import colors from '../../theme/colors';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';

const DetailsListItem = ({icon, title, subTitle}) => {
  console.log(icon);
  return (
    <TouchableHighlight
      id={title}
      underlayColor={colors.grey}
      style={styles.container}>
      <View style={styles.containerContent}>
        {icon && (
          <Icon
            name={icon}
            size={24}
            style={{
              color: colors.black,
              marginRight: 10,
            }}
          />
        )}
        <View style={{marginLeft: 20}}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default DetailsListItem;
