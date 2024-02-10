import { SlideFadeProps } from "@chakra-ui/react";
import { GridItemProps } from "@chakra-ui/react";
import { ImageProps } from "@chakra-ui/react";
import { StackProps } from "@chakra-ui/react";
import { TextProps } from "@chakra-ui/react";

export const $slideFadeStyle0 = (index: number): SlideFadeProps => ({
  transition: {
    enter: {
      delay: (index * 1) / 16,
      duration: 0.5,
    },
    exit: {
      delay: 0.25,
      duration: 0.75,
    },
  },
});

export const $gridItemStyle1: GridItemProps = {
  pointerEvents: "auto",
  cursor: "pointer",
  gap: 2,
  border: "1px",
  borderColor: "blackAlpha.100",
  p: 2.5,
  colSpan: 1,
};

export const $imageStyle2: ImageProps = {
  aspectRatio: 1,
  objectFit: "cover",
};

export const $stackStyle3: StackProps = {
  mt: 1.5,
};

export const $textStyle4: TextProps = {
  fontSize: "2xs",
};
