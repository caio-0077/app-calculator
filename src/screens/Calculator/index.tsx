import React from 'react'
import { View, FlatList, TextInput, Text, SafeAreaView } from 'react-native';
import { styles } from './styles'
import RenderItem from './RenderItem'
import { data } from './mook'

const Calculator: React.FC = () => {
  const [text, onChangeText] = React.useState("");

  const handleChange = (value) => {
    onChangeText(old => (`${old}${value}`))
  }

  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.contentInput}>
        <TextInput
          onChangeText={onChangeText}
          value={text}
          style={styles.input} />
        <View style={styles.contentResult}>
          <Text style={styles.textResult}>100</Text>
        </View>
      </View>
      <View style={styles.contentFlatList}>
        <FlatList
          data={data}
          renderItem={({ item }) => (<RenderItem item={item} handleChange={handleChange} />)}
          numColumns={4}
        />
      </View>
    </SafeAreaView>
  );
}

export default Calculator