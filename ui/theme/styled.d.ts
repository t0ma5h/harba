import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends CommonProps, PaletteProps {}
}

export interface CommonProps {
  borderRadius: string;
  sizes: {
    text: {
      header: number;
      body: number;
    };
  };
  paddings: {
    buttonContainerSmall: number | string;
    buttonContainer: number | string;
    screenContainer: number | string;
  };
  margins: {
    button: number | string;
  };
}

export interface PaletteProps {
  palette: {
    textColor: string;
    primary: string;
    secondary: string;
    disabled: string;
    background: string;
    tint: string;
    tabIconDefault: string;
    tabIconSelected: string;
  };
}
