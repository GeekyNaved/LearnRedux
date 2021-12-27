import React, {useState} from 'react';
import {
  Button,
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);
  function decrementCount() {
    setCount(count - 1);
  }
  function incrementCount() {
    setCount(count + 1);
  }
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.container}>
        <Button title="increment" onPress={() => incrementCount()} />
        <Text>{count}</Text>
        <Button title="decrement" onPress={() => decrementCount()} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height - 50,
  },
});

export default App;
