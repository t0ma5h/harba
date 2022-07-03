import { StyleSheet } from "react-native";
import BottomSheetComponent from "../components/bottomSheet/BottomSheet";
import MapComponent from "../components/map/Map";

import { RootTabScreenProps } from "../types";
import { Column, Text } from "../ui";

const HomeScreen = ({ navigation }: RootTabScreenProps<"HomeScreen">) => {
  return (
    <Column>
      <MapComponent></MapComponent>
    </Column>
  );
};

export default HomeScreen;
