import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
const styles = StyleSheet.create({
  containerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 24,
    borderBottomColor: colors.grey,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  avatar: {
    height: 44,
    width: 44,
    borderRadius: 30,
    justifyContent: 'center',
  },
  container: {paddingLeft: 24},
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
  },
  subTitle: {fontSize: 15, color: colors.blue, marginTop: 5},
});
export default styles;
