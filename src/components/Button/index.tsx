import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';


export type Props = {
  content: string;
  colorText: string;
  color: string;
  icon: boolean;
};

const Button: React.FC<Props> = ({ content, colorText, color, icon, onPress }) => {
  return (
    <TouchableOpacity style={styles.button(color)} onPress={onPress}>
      {!icon &&
        <Text style={styles.textButton(colorText)}>{content}</Text>
      }
      {icon &&
        <View>
          <Ionicons name='backspace' size={30} color='white' />
        </View>
      }
    </TouchableOpacity>
  );
}

export default Button