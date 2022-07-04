import styled from "styled-components/native";
import ExpoFastImage from "expo-fast-image";
import { Dimensions } from "react-native";

export const HarborImage = styled(ExpoFastImage)`
  border-radius: ${Dimensions.get("screen").width / 2};
  width: 100%;
  height: 100%;
  align-self: center;
`;
