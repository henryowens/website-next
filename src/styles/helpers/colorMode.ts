type ColorModes = "dark" | "light";

export const colorModeMap = (
  { dark, light }: Record<ColorModes, any>,
  mode: ColorModes
) =>
  ({
    dark,
    light,
  }[mode]);
