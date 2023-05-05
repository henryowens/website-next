import type {
  ComponentStyleConfig,
  StyleFunctionProps,
  SystemStyleObject,
} from "@chakra-ui/react";

const baseStyle: SystemStyleObject = {
  borderRadius: "0",
  color: "blackAlpha.500",
  borderColor: "blackAlpha.500",
  border: "1px solid",
  fontWeight: "normal",
};

const variants = {
  solid: ({ theme: { colors } }: StyleFunctionProps) => ({
    border: `1px solid ${colors.blackAlpha[500]}`,
    _hover: {
      color: "blackAlpha.500",
      borderColor: "blackAlpha.500",
      border: "1px solid",
    },
  }),
  outline: {
    _hover: {
      backgroundColor: "blackAlpha.500",
      color: "white",
      borderColor: "blackAlpha.500",
    },
  },
};

export const Button: ComponentStyleConfig = {
  baseStyle,
  variants,
  defaultProps: { colorScheme: "blackAlpha" },
};
