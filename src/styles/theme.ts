import { extendTheme } from "@chakra-ui/react";

import { colors } from "./colors";
import { components } from "./components";
import { config } from "./config";
import { fonts } from "./fonts";
import { global } from "./global";

const customTheme = extendTheme({
  colors,
  components,
  config,
  fonts,
  styles: { global },
});

export default customTheme;
