import { DefaultTheme } from "react-native-paper";
import { darkTheme, lightTheme } from "./theme";

export const getPaperTheme = (systemTheme: NonNullable<ColorSchemeName>) => {
  return systemTheme === "light" ? lightPaperTheme : darkPaperTheme;
};

export const darkPaperTheme = {
  ...DefaultTheme,
  roundness: 2,
  version: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: darkTheme.palette.primary,
    secondary: darkTheme.palette.secondary,
  },
};

export const lightPaperTheme = {
  ...DefaultTheme,
  roundness: 2,
  version: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: lightTheme.palette.primary,
    secondary: lightTheme.palette.secondary,
  },
};
