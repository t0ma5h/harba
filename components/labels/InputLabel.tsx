import styled from "styled-components/native";
import { Text } from "../../ui";

export const InputLabel = styled(Text)<{ width?: number | string }>`
  color: ${({ theme }) => theme.palette.secondary};
  width: ${({ width }) => (width ? width : `100%`)};
  font-size: 16px;
  text-align: left;
  margin-top: ${({ theme }) => theme.paddings.buttonContainer}; ;
`;
