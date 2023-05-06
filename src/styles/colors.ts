import { Theme, ColorHues } from "@chakra-ui/react";

interface ColorHuesInput {
  50?: string;
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
  600?: string;
  700?: string;
  800?: string;
  900?: string;
}

const defaultColor = {
  50: "",
  100: "",
  200: "",
  300: "",
  400: "",
  500: "",
  600: "",
  700: "",
  800: "",
  900: "",
};

const createColor = (hues: ColorHuesInput): ColorHues => ({
  ...defaultColor,
  ...hues,
});

const overridenChakraColors = {
  blackAlpha: createColor({
    500: "#3f3a3a",
  }),
  white: createColor({
    500: "#fffff3",
  }),
};

export const colors = {
  ...overridenChakraColors,
};
