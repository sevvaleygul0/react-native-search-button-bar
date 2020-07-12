import React, {Component} from 'react';
import {
  View,
  TextInput,
  Dimensions,
  Image,
  Animated,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import styles, {textInput, container} from './SearchBar.style';
const {width: ScreenWidth} = Dimensions.get('window');

export default class SearchBar extends Component {
  textInput = null;

  constructor(props) {
    super(props);
    this.searchInput = React.createRef();
    this.state = {
      animation: new Animated.Value(0),
      visibleCloseButton: false,
      searchText: null,
    };
  }

  onChangeText = text => {
    this.setState({searchText: text});
    this.props.onChangeText && this.props.onChangeText(text);
  };

  startAnimation = () => {
    const {width} = this.props;
    Animated.timing(this.state.animation, {
      toValue: -width / 2.5,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    this.setState({visibleCloseButton: true});
  };

  endAnimation = () => {
    this.textInput.clear();
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
    }).start();
    this.setState({visibleCloseButton: false});
  };

  onCancel = () => {
    this.props.onCancel && this.props.onCancel();
  };

  render() {
    const {
      width,
      height,
      borderWidth,
      borderColor,
      placeholderTextColor,
      searchImageSource,
      closeImageSource,
      onCancel,
    } = this.props;
    return (
      <View style={container(height, width, borderWidth, borderColor)}>
        <Animated.View
          style={{
            width: 25,
            marginLeft: 8,
            top: 10,
            left: width / 2.5,
            zIndex: 99,
            alignItems: 'center',
            justifyContent: 'center',
            transform: [{translateX: this.state.animation}],
          }}>
          <TouchableWithoutFeedback
            style={{zIndex: 99}}
            onPress={() => {
              this.startAnimation();
            }}>
            <Image source={searchImageSource} style={{width: 25, height: 25}} />
          </TouchableWithoutFeedback>
        </Animated.View>
        {this.state.visibleCloseButton ? (
          <View>
            <TextInput
              ref={c => {
                this.textInput = c;
              }}
              placeholderTextColor={placeholderTextColor}
              onChangeText={text => this.onChangeText(text)}
              style={textInput(height, width, placeholderTextColor)}
            />
            <View style={{bottom: 60, marginLeft: 'auto', marginRight: 5}}>
              <TouchableWithoutFeedback
                onPress={() => {
                  this.onCancel();
                  this.endAnimation();
                }}>
                <Image source={closeImageSource} style={styles.imageStyle} />
              </TouchableWithoutFeedback>
            </View>
          </View>
        ) : (
          <Text />
        )}
      </View>
    );
  }
}
SearchBar.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SearchBar.defaultProps = {
  width: ScreenWidth * 0.9,
  height: 50,
  borderWidth: 1,
  placeholder: 'Arama yapınız..',
  placeholderTextColor: 'black',
  borderColor: 'purple',
  searchImageSource: require('../asset/search.png'),
  closeImageSource: require('../asset/close.png'),
};
