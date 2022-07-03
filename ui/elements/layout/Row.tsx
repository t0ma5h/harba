import styled from "styled-components/native";
import { View as DefaultView } from "react-native";
export type ViewProps = DefaultView["props"];

const Row = styled.View<ViewProps>`
  flex-direction: row;
  flex: 1;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

export default Row;
