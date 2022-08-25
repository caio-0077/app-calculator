import React from 'react'
import Calculator from './src/screens/Calculator'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.content}>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
      <Calculator />
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});

export default App