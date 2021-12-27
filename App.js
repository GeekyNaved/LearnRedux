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
import {useDispatch, useSelector} from 'react-redux';
import {decNumber, incNumber} from './actions';

const App = () => {
  const myState = useSelector(state => state.changeTheNumber);
  const dispatch = useDispatch();
  // const [count, setCount] = useState(0);
  // function decrementCount() {
  //   setCount(count - 1);
  // }
  // function incrementCount() {
  //   setCount(count + 1);
  // }
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.container}>
        <Button title="increment" onPress={() => dispatch(incNumber(5))} />
        <Text>{myState}</Text>
        <Button title="decrement" onPress={() => dispatch(decNumber())} />
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
