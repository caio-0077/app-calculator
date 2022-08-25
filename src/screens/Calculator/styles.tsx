import { StyleSheet } from 'react-native';
import { colors } from '../../components/Colors';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: colors.black,
  },
  contentInput: {
    margin: 12,
  },
  input: {
    width: "100%",
    textAlign: 'right',
    fontSize: 100,
    fontWeight: '300',
    color: colors.white,
  },
  contentResult: {
    width: "100%",
    alignItems: 'flex-end'
  },
  textResult: {
    fontSize: 55,
    color: colors.white,
    fontWeight: '300',
  },
  contentFlatList: {
    margin: 12,
  }
});

export { styles }