export const textInput = (height, width, placeholderTextColor) => ({
  height,
  width,
  placeholderTextColor,
  bottom: 26,
  borderRadius: 24,
  paddingRight: 32,
  paddingLeft: 40,
  justifyContent: 'center',
  alignItems: 'center',
});

export const container = (height, width, borderWidth, borderColor) => ({
  width,
  height,
  borderWidth,
  borderColor,
  borderRadius: 24,
});

export default {
  imageStyle: {width: 16, height: 16, marginRight: 8},
};
