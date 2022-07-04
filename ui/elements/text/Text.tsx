import styled from "styled-components/native";

const Text = styled.Text<{
  bold?: boolean;
  fontSize?: string | number;
  color?: string;
}>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize + "px" : "16px")};
  font-family: ${({ bold }) => (bold ? "raleway-bold" : "raleway")};
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ theme, color }) => (color ? color : theme.palette.textColor)};
`;

export default Text;
