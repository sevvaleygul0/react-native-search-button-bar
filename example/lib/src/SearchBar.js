import React, {Component} from 'react';
import {
  View,
  TextInput,
  Dimensions,
  Image,
  Animated,
  TouchableWithoutFeedback,
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
      toValue: -width / 2.3,
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
      placeholder,
      searchImageSource,
      closeImageSource,
      backgroundColor,
      shadowColor,
      shadowRadius,
      buttonsDisable,
      leftImageButtonSource,
      rightImageButtonSource,
      onPressLeftImageButton,
      onPressRightImageButton,
    } = this.props;
    return (
      <View
        style={container(
          height,
          width,
          borderWidth,
          borderColor,
          backgroundColor,
          shadowColor,
          shadowRadius,
        )}>
        <Animated.View
          style={{
            width: 25,
            marginLeft: 8,
            top: 10,
            left: width / 2.3,
            zIndex: 999,
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
          <View
            style={{
              bottom: 26,
              height: height,
              alignItems: 'center',
            }}>
            <TextInput
              ref={ref => {
                this.textInput = ref;
              }}
              placeholder={placeholder}
              onChangeText={text => this.onChangeText(text)}
              style={textInput(height, width)}
            />
            <View style={{bottom: 32, marginLeft: 'auto', marginRight: 5}}>
              <TouchableWithoutFeedback
                onPress={() => {
                  this.onCancel();
                  this.endAnimation();
                }}>
                <Image source={closeImageSource} style={styles.imageStyle} />
              </TouchableWithoutFeedback>
            </View>
          </View>
        ) : !buttonsDisable ? (
          <View
            style={{
              bottom: 26,
              height: height,
              flexDirection: 'row',
              zIndex: 99,
              alignItems: 'center',
            }}>
            <View
              style={{
                marginRight: 'auto',
                marginLeft: 10,
              }}>
              <TouchableWithoutFeedback
                onPress={() => {
                  onPressLeftImageButton && onPressLeftImageButton();
                }}>
                <Image
                  source={leftImageButtonSource}
                  style={styles.leftAndRightimageStyle}
                />
              </TouchableWithoutFeedback>
            </View>
            <View style={{marginLeft: 'auto', marginRight: 5}}>
              <TouchableWithoutFeedback
                onPress={() => {
                  onPressRightImageButton && onPressRightImageButton();
                }}>
                <Image
                  source={rightImageButtonSource}
                  style={styles.leftAndRightimageStyle}
                />
              </TouchableWithoutFeedback>
            </View>
          </View>
        ) : null}
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
  placeholder: 'Search something..',
  borderColor: 'purple',
  backgroundColor: 'transparent',
  shadowColor: '#757575',
  shadowRadius: 10,
  searchImageSource: require('../asset/search.png'),
  closeImageSource: require('../asset/close.png'),
  leftImageButtonSource: require('../asset/email.png'),
  rightImageButtonSource: require('../asset/graph.png'),
};
