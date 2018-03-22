/*!
 * react-native-multi-select
 * Copyright(c) 2017 Mustapha Babatunde Oluwaleke
 * MIT Licensed
 */

export const colorPack = {
  primary: '#00aeef',
  primaryDark: '#00427e',
  light: '#FFF',
  textPrimary: '#525966',
  placeholderTextColor: '#A9A9A9',
  danger: '#eb3014',
  borderColor: '#b9b9b9',
  backgroundColor: '#b1b1b1',
};

export default {
  footerWrapper: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  footerWrapperNC: {
    width: 320,
    flexDirection: 'column',
  },
  subSection: {
    backgroundColor: colorPack.light,
    paddingLeft: 0,
    paddingRight: 0,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  greyButton: {
    height: 40,
    borderRadius: 5,
    elevation: 0,
    backgroundColor: colorPack.backgroundColor,
  },
  indicator: {
    fontSize: 30,
    color: colorPack.placeholderTextColor,
  },
  selectedItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 3,
    margin: 3,
    borderRadius: 20,
    borderWidth: 1,
  },
  button: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colorPack.light,
    fontSize: 14,
  },
  selectorView: (fixedHeight) => {
    const style = {
      flexDirection: 'column',
      marginBottom: 10,
      elevation: 2,
    };
    if (fixedHeight) {
      style.height = 250;
    }
    return style;
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    backgroundColor: colorPack.light,
  },
  dropdownView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    marginBottom: 10,
  },

  drop: {
    borderWidth: 1,
    borderColor: colorPack.borderColor,
    borderRadius: 4,
  },
  select_box: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colorPack.borderColor,
    borderRadius: 4,
    padding: 15,
  },
  select_box_input: {
    flex: 5,
    padding: 0,
    margin: 0
  },
  select_box_icon: {
    flex: 1,
    color: colorPack.primaryDark,
    textAlign: 'right'
  },
};
