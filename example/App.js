import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from './lib/src/SearchBar';

const App = () => {
  return (
    <View style={styles.container}>
      <SearchBar
        width={200}
        height={50}
        placeholder="Search.."
        placeholderTextColor="purple"
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
