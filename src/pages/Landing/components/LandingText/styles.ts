import { FlexProps } from '@chakra-ui/react';
import { FadeProps } from '@chakra-ui/react';
import { TextProps } from '@chakra-ui/react';

export const $flexStyle0: FlexProps = {
  mixBlendMode: "difference",
  mt: {
  base: "15%",
  lg: "15%"
},
  alignSelf: "center",
  justifyContent: "center",
  px: 6,
  py: 1,
  minW: "100vw",
  zIndex: 1000,
};

export const $fadeStyle1: FadeProps = {
  transition: {
  enter: {
    delay: 1.75,
    duration: 1
  },
  exit: {
    delay: 0,
    duration: 0.5
  }
},
};

export const $textStyle2: TextProps = {
  lineHeight: 0.95,
  maxW: {
  base: "3ch",
  lg: "100%"
},
  textAlign: {
  base: "center",
  lg: "left"
},
  pointerEvents: "auto",
  cursor: "pointer",
  fontSize: {
  base: 180,
  lg: 200
},
  color: "white",
  fontWeight: "500",
  fontFamily: "Helvetica",
};

