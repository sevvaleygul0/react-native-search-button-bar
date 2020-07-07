import React, {Component} from 'react';
import {View, TextInput, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import styles, {textInput} from './SearchBar.style';
const {width: ScreenWidth} = Dimensions.get('window');

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      width,
      height,
      borderWidth,
      borderColor,
      placeholder,
      placeholderTextColor,
    } = this.props;
    return (
      <View>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          style={textInput(height, width, borderWidth, borderColor)}>
          {' '}
        </TextInput>
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
  borderColor: "purple"
};
