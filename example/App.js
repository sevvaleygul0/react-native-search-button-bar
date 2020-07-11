import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from './lib/src/SearchBar';

const App = () => {
  return (
    <View style={styles.container}>
      <SearchBar
        width={270}
        height={50}
        placeholder="Search.."
        placeholderTextColor="purple"
        onChangeText={text => console.log(text)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;
