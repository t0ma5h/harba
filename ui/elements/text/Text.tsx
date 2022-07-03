import styled from "styled-components/native";

const Text = styled.Text<{ bold?: boolean }>`
  font-size: 16px;
  font-family: ${({ bold }) => (bold ? "raleway-bold" : "raleway")};
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.palette.textColor};
`;

export default Text;
