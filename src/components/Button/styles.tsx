import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  button: (color: string) => ({
    height: 90,
    width: 90,
    marginHorizontal: 5,
    marginVertical: 6,
    backgroundColor: color,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  textButton: (colorText: string) => ({
    fontSize: 45,
    color: colorText,
  }),
});

export { styles }