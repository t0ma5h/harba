import { ColorSchemeName } from "react-native";
import { DefaultTheme } from "styled-components/native";
import { CommonProps, PaletteProps } from "./styled";
const tintColorLight = "#00A662";
const tintColorDark = "#00A662";

export const getTheme = (systemTheme: NonNullable<ColorSchemeName>) => {
  return systemTheme === "light" ? lightTheme : darkTheme;
};

const commonTheme: CommonProps = {
  borderRadius: "12px",
  sizes: {
    text: {
      header: 24,
      body: 12,
    },
  },
};

const darkPalete: PaletteProps = {
  palette: {
    textColor: "#132736",
    primary: "#132736",
    secondary: "#014d2d",
    background: "#000",
    tint: tintColorDark,
    tabIconDefault: "#353635",
    tabIconSelected: tintColorDark,
  },
};

const lightPalette: PaletteProps = {
  palette: {
    textColor: "#244964",
    primary: "#244964",
    secondary: "#00A662",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#fff",
    tabIconSelected: tintColorLight,
  },
};

const darkTheme: DefaultTheme = {
  ...commonTheme,
  ...darkPalete,
};

const lightTheme: DefaultTheme = {
  ...commonTheme,
  ...lightPalette,
};
