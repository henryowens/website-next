import type {
  ComponentStyleConfig,
  StyleFunctionProps,
  SystemStyleObject,
} from "@chakra-ui/react";
import { colorModeMap } from "../helpers/colorMode";

const baseStyle: SystemStyleObject = {
  borderRadius: "0",
  color: "blackAlpha.500",
  borderColor: "blackAlpha.500",
  border: "1px solid",
  fontWeight: "normal",
  _hover: { cursor: "pointer" },
};

const variants = {
  solid: ({ theme: { colors }, colorMode }: StyleFunctionProps) =>
    colorModeMap(
      {
        dark: {
          color: "blackAlpha.500",
          backgroundColor: "white.500",
          border: `1px solid ${colors.white[500]}`,
          _hover: { color: "white.500" },
        },
        light: {
          border: `1px solid ${colors.blackAlpha[500]}`,
          _hover: {
            color: "blackAlpha.500",
          },
        },
      },
      colorMode
    ),
  outline: ({ colorMode }: StyleFunctionProps) =>
    colorModeMap(
      {
        light: {
          _hover: {
            backgroundColor: "blackAlpha.500",
            color: "white",
            borderColor: "blackAlpha.500",
          },
        },
        dark: {
          _hover: {
            backgroundColor: "white.500",
            color: "blackAlpha.500",
          },
        },
      },
      colorMode
    ),
};

export const Button: ComponentStyleConfig = {
  baseStyle,
  variants,
  defaultProps: { colorScheme: "blackAlpha" },
};
