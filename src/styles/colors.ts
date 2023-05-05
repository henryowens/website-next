import { theme, DeepPartial, Theme } from "@chakra-ui/react";

const extendedColors: DeepPartial<
  Record<string, Theme["colors"]["blackAlpha"]>
> = {
  blackAlpha: {
    "50": "",
    "100": "",
    "200": "",
    "300": "",
    "400": "",
    500: "#3f3a3a",
    "600": "",
    "700": "",
    "800": "",
    "900": "",
  },
};

const overridenChakraColors: DeepPartial<Theme["colors"]> = {};

export const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};
