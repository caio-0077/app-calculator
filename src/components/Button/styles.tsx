import { ViewStyle, ImageStyle, TextStyle} from 'react-native';

interface Styles {
  button: (color: string) => ViewStyle;
  textButton:(color: string) => TextStyle
}

const styles: Styles = {
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
}

export { styles }