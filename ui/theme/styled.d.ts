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
}

export interface PaletteProps {
  palette: {
    textColor: string;
    primary: string;
    secondary: string;
    background: string;
    tint: string;
    tabIconDefault: string;
    tabIconSelected: string;
  };
}
