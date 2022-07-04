import styled from "styled-components/native";
import { Dimensions } from "../../constants/types/Dimensions";

const CommonTextInput = styled.TextInput<Dimensions>`
  width: ${({ width }) => (width ? width : "80%")};
  height: ${({ height }) => (height ? height : "7%")};
  padding: ${({ theme }) => theme.paddings.buttonContainer};
  margin: ${({ theme }) => theme.margins.button};
  background-color: #e8e8e8;
  border-radius: 50px;
`;

export default CommonTextInput;
