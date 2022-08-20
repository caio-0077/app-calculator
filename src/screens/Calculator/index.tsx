import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, FlatList, SafeAreaView, Dimensions } from 'react-native';
import { styles } from './styles';
import Button from '../../components/Button';
import { colors } from '../../components/Colors';
const dados = [
  {
    id: 1,
    content: 'AC',
    value: 'AC',
    colorText: colors.black,
    color: colors.gray,
  },
  {
    id: 2,
    content: '(  )',
    value: '( )',
    colorText: colors.black,
    color: colors.gray,
  },
  {
    id: 3,
    content: '%',
    value: '%',
    colorText: colors.black,
    color: colors.gray,
  },
  {
    id: 4,
    content: '÷',
    value: '÷',
    colorText: colors.white,
    color: colors.red,
  },
  {
    id: 5,
    content: '7',
    value: 7,
    colorText: colors.white,
    color: colors.darkGray,
  },
  {
    id: 6,
    content: '8',
    value: 8,
    colorText: colors.white,
    color: colors.darkGray,
  },
  {
    id: 7,
    content: '9',
    value: 9,
    colorText: colors.white,
    color: colors.darkGray,
  },
  {
    id: 8,
    content: '×',
    value: '×',
    colorText: colors.white,
    color: colors.red,
  },
  {
    id: 9,
    content: '4',
    value: 4,
    colorText: colors.white,
    color: colors.darkGray,
  },
  {
    id: 10,
    content: '5',
    value: 5,
    colorText: colors.white,
    color: colors.darkGray,
  },
  {
    id: 11,
    content: '6',
    value: 6,
    colorText: colors.white,
    color: colors.darkGray,
  },
  {
    id: 12,
    content: '-',
    value: '-',
    colorText: colors.white,
    color: colors.red,
  },
  {
    id: 13,
    content: '1',
    value: 1,
    colorText: colors.white,
    color: colors.darkGray,
  },
  {
    id: 14,
    content: '2',
    value: 2,
    colorText: colors.white,
    color: colors.darkGray,
  },
  {
    id: 15,
    content: '3',
    value: 3,
    colorText: colors.white,
    color: colors.darkGray,
  },
  {
    id: 16,
    content: '+',
    value: '+',
    colorText: colors.white,
    color: colors.red,
  },
  {
    id: 17,
    content: '0',
    value: 'AC',
    colorText: colors.white,
    color: colors.darkGray,
  },
  {
    id: 18,
    content: ',',
    value: 'AC',
    colorText: colors.white,
    color: colors.darkGray,
  },
  {
    id: 19,
    content: 'AC',
    icon: true,
    value: 'AC',
    colorText: colors.white,
    color: colors.darkGray,
  },
  {
    id: 20,
    content: '=',
    value: '=',
    icon: true,
    colorText: colors.white,
    color: colors.red,
  },
]


const Calculator: React.FC = () => {



  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.sectionContainer}>
        {dados.map(item => (
          <View style={styles.boxContainer}>
            <Button
              icon={item.icon}
              content={item.content}
              colorText={item.colorText}
              color={item.color}
            />
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}



export default Calculator