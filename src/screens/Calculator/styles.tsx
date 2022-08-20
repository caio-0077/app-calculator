import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../components/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  buttons: {
  },
  sectionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  boxContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export { styles }