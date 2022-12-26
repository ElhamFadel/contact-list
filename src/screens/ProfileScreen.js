import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../theme/colors';
import {DetailsListItem} from '../components';

const {height} = Dimensions.get('window');
const setHeight = h => (height / 100) * h;

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.heroProfile}>
        <TouchableHighlight style={styles.profileImgContainer}>
          <Image
            source={{uri: 'https://randomuser.me/api/portraits/women/29.jpg'}}
            style={styles.img}
          />
        </TouchableHighlight>
        <Text style={styles.name}>Elham Elshami</Text>
        <Text style={styles.phone}>
          <Icon
            name={'phone'}
            size={16}
            style={{
              color: '#fff',
              alignSelf: 'baseline',
            }}
          />
          {'  '}
          05997853623
        </Text>
      </View>
      <View style={styles.details}>
        <DetailsListItem icon="mail" title="Email" subTitle={'email'} />
        <DetailsListItem icon="phone" title="Work" subTitle={'phone'} />
        <DetailsListItem icon="smartphone" title="Personal" subtitle={'cell'} />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileImgContainer: {
    height: 85,
    width: 85,
    borderRadius: 50,
    backgroundColor: '#fff',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 13,
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  heroProfile: {
    backgroundColor: colors.blue,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: setHeight(45),
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 3,
  },
  phone: {
    fontSize: 15,
    color: '#fff',
  },
});
