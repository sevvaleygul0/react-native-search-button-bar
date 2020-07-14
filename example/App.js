import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import data from './lib/data/StaticData';
// import SearchBar from 'react-native-search-button-bar';
import SearchBar from './lib/src/SearchBar';
const {width: ScreenWidth} = Dimensions.get('window');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staticData: data,
      messageVisible: false,
      graphVisible: false,
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
  handleLeftButton = () => {
    this.setState({messageVisible: true, graphVisible: false});
  };
  handleRightButton = () => {
    this.setState({messageVisible: false, graphVisible: true});
  };
  render() {
    return (
      <View style={styles.container}>
        {this.state.messageVisible ? (
          <View style={{marginBottom: 10}}>
            <Image
              source={require('./lib/asset/email-1.png')}
              style={{width: 60, height: 60}}
            />
          </View>
        ) : null}
        {this.state.graphVisible ? (
          <View style={{marginBottom: 10}}>
            <Image
              source={require('./lib/asset/graph-1.png')}
              style={{width: 60, height: 60}}
            />
          </View>
        ) : null}
        <SearchBar
          height={50}
          borderColor="#fff"
          backgroundColor="#fff"
          onChangeText={text => {
            if (text.length !== 0) this.filter(text);
          }}
          onCancel={() => this.onClose()}
          onPressLeftImageButton={() => this.handleLeftButton()}
          onPressRightImageButton={() => this.handleRightButton()}
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
    backgroundColor: '#fff7ed',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: '#c07514',
  },
});
