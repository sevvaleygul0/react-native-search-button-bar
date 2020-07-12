import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';
import SearchBar from './lib/src/SearchBar';
import data from './lib/data/StaticData';
const {width: ScreenWidth} = Dimensions.get('window');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staticData: data,
    };
  }

  renderItem = item => {
    return (
      <View style={styles.cardStyle}>
        <Text style={styles.textStyle}>{item.name}</Text>
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
          height={50}
          borderColor="#fff"
          backgroundColor="#fff"
          onChangeText={text => {
            if (text.length !== 0) this.filter(text);
          }}
          onCancel={() => this.onClose()}
        />
        <View style={styles.flatListStyle}>
          <FlatList
            data={this.state.staticData}
            keyExtractor={item => item.id.toString()}
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
    backgroundColor: '#ff8f1a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListStyle: {
    width: ScreenWidth * 0.9,
    height: 400,
  },
  cardStyle: {
    marginTop: 20,
    height: 40,
    backgroundColor: '#ffd6a1',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: '#c07514',
  },
});
