import { spacing, fontSizes } from "./units";

const white = "#fff";
const black = "#111";

const palette = {
  common: {
    black,
    white,
  },
  primary: {
    main: "#6464e6",
    light: "#146DD6",
    contrastText: white,
  },
  error: {
    main: "#e73939",
    light: "#FFF3EE",
    dark: "#9c2e2e ",
    contrastText: white,
  },
  success: {
    main: "#17e904",
    light: "#cff0cc61",
    dark: "#366936",
    contrastText: white,
  },
  warning: {
    main: "#dcdc2c",
    light: "#f7f7c473",
    dark: "#787836",
    contrastText: white,
  },
  info: {
    main: "#2136e5b3",
    light: "#e4f3fe",
    dark: "#313174",
    contrastText: white,
  },
  grey: {
    0: "#FAFAFA",
    10: "#EEE",
    100: "#EAEAEA",
    200: "#C9C5C5",
    300: "#888",
    400: "#666",
  },
};

const shadows = {
  0: "none",
  1: "0px 5px 10px rgba(0, 0, 0, 0.12)",
  2: "0px 8px 30px rgba(0, 0, 0, 0.24)",
};

const typography = {
  fontFamily: '"Fira Sans", sans-serif',
};

const shape = {
  borderRadius: spacing["xxsmall"],
};

export const theme = {
  palette,
  shadows,
  typography,
  shape,
  fontSizes,
  spacing,
};
