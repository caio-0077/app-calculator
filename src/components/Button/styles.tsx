import { ViewStyle, TextStyle } from 'react-native';

interface IStyles {
  button: (color: string) => ViewStyle;
  textButton: (color: string) => TextStyle
}

const styles: IStyles = {
  button: (color: string) => ({
    height: 90,
    width: 90,
    flex: 1,
    marginHorizontal: 4,
    marginVertical: 4,
    backgroundColor: color,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  textButton: (colorText: string) => ({
    fontSize: 35,
    color: colorText,
  }),
}

export { styles }