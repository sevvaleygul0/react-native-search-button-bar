export const textInput = (
  height,
  width,
  borderWidth,
  borderColor,
  placeholder,
  placeholderTextColor,
) => ({
  bottom: 26,
  borderRadius: 24,
  paddingRight: 12,
  paddingLeft: 40,
  width: width - 14,
  height,
  borderWidth,
  borderColor,
  placeholder,
  placeholderTextColor,
  justifyContent: 'center',
  alignItems: 'center',
});

export const container = (height, width, borderWidth, borderColor) => ({
  borderRadius: 24,
  width,
  height,
  borderWidth,
  borderColor,
});

export default {
  imageStyle: {width: 16, height: 16, marginRight: 8},
};
