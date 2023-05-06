import { useColorMode } from "@chakra-ui/react";

export const IsThemeLight = () => useColorMode().colorMode === "light";
export const IsThemeDark = () => useColorMode().colorMode === "dark";
