import { StyleFunctionProps } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const global = (props: StyleFunctionProps) => ({
  body: {
    overflowX: "hidden",
    bg: mode("white.500", "blackAlpha.500")(props),
    color: mode(
      props.theme.colors.blackAlpha["500"],
      props.theme.colors.white["500"]
    )(props),
  },
});
