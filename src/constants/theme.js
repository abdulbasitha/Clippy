import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window")
const colors = {
  accent: "#EB0404",
  primary: "#7C0000",
  secondary: "#DEC87A",
  black: "#261C1C",
  white: "#FFFFFF",
  lightGray: "#eff2f5",
  gray: "#6F6666",
  shadow:"#000",
  text:"#181461",
  inputBackground:"#EEEEEE"
};

const sizes = {
  base:16,
  base1: 10,
  base2: 15,
  base3: 20,
  base4:28,
  font: 14,
  radius: 6,

  padding: 25,
  padding1:10,
  padding2:12,
  padding3:20,
  padding4:16,

  
  h1: 26,
  h2: 20,
  h3: 18,
  h4: 14,

  largeTittle:50,
  title: 18,
  header: 16,
  body: 14,
  caption: 12,
  logo: 32,
  width,
  height

};

const fontNames = {
  bold:'IBMPlexSerif-Bold',
  boldItalic:'IBMPlexSerif-BoldItalic',
  extraLight:'',
  extraLightItalic:'',
  italic:'',
  light:'',
  lightItalic:'IBMPlexSerif-LightItalic',
  medium:'',
  mediumItalic:'',
  regular:'IBMPlexSerif-Italic',
  semiBold:'',
  semiBoldItalic:'',
  thin:'',
  thinItalic:'',
}



const fonts = {
  largeTittle:{ fontSize: sizes.largeTittle, fontFamily:fontNames.boldItalic},
  h1: { fontSize: sizes.h1, fontFamily: fontNames.bold },
  h2: { fontSize: sizes.h2, fontFamily: fontNames.bold  },
  h3: { fontSize: sizes.h3, fontFamily: fontNames.bold  },
  h4: { fontSize: sizes.h4, fontFamily: fontNames.bold  },
  header: { fontSize: sizes.header, fontFamily: fontNames.regular },
  title: { fontSize: sizes.title, fontFamily: fontNames.regular  },
  body: { fontSize: sizes.body },
  caption: { fontSize: sizes.caption },
  logo: { fontSize: sizes.logo }
};



export { colors, sizes, fonts, fontNames };
