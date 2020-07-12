import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import SearchBar from './lib/src/SearchBar';
import data from './lib/data/StaticData';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staticData: data,
    };
  }

  renderItem = item => {
    return (
      <View style={{marginTop: 20}}>
        <Text>{item.name}</Text>
      </View>
    );
  };
  filter = text => {
    const newData = this.state.staticData.filter(item => {
      const list = item.name.toLowerCase();
      return list.indexOf(text.toLowerCase()) > -1;
    });
    this.setState({staticData: newData});
  };
  onClose = () => {
    this.setState({staticData: data});
  };
  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          // width={270}
          height={50}
          placeholder="Search.."
          placeholderTextColor="purple"
          onChangeText={text => {
            if (text.length !== 0) this.filter(text);
          }}
          onCancel={() => this.onClose()}
        />
        <View style={styles.flatListStyle}>
          <FlatList
            data={this.state.staticData}
            renderItem={({item}) => this.renderItem(item)}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListStyle: {
    width: 270,
    height: 200,
  },
});
