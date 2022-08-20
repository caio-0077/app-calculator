import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from './styles';


export type Props = {
  content: string;
  colorText: string;
  color: string;
  icon: boolean;
};

const Button: React.FC<Props> = ({ content, colorText, color, icon = false }) => {
  return (

    <TouchableOpacity style={styles.button(color)}>
      {!icon &&
        <Text style={styles.textButton(colorText)}>{content}</Text>
      }
      {icon &&
        <View>
          {content}
        </View>
      }
    </TouchableOpacity>
  );
}

export default Button