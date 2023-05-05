import { DeepPartial, Theme } from "@chakra-ui/react";

import "@fontsource/josefin-sans/400.css";
import "@fontsource/space-mono/400.css";

export const fonts: DeepPartial<Theme["fonts"]> = {
  heading: `'Josefin Sans', sans-serif`,
  body: `'Space Mono', sans-serif`,
};
