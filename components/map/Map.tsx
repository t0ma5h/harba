import { StyleSheet } from "react-native";

import { RootTabScreenProps } from "../../types";
import { Column, Text } from "../../ui";
import MapView, { Marker } from "react-native-maps";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { Harbor } from "../../constants/types";
import BottomSheetComponent from "../bottomSheet/BottomSheet";
import { useState } from "react";
const MapComponent = () => {
  const harbors = require("./harbors.json");
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [currentHarbor, setCurrentHarbor] = useState<Harbor | undefined>(
    undefined
  );

  const toggleModal = (harbor: Harbor) => {
    setCurrentHarbor(harbor);
    setBottomSheetOpen(true);
  };

  return (
    <>
      <Column>
        <StyledMap
          initialRegion={{
            latitude: Number(harbors[0].lat),
            longitude: Number(harbors[0].lon),
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onTouchStart={() => bottomSheetOpen && setBottomSheetOpen(false)}
        >
          {harbors.map((harbor: Harbor) => (
            <Marker
              key={harbor.id}
              coordinate={{
                latitude: Number(harbor.lat),
                longitude: Number(harbor.lon),
              }}
              onPress={() => toggleModal(harbor)}
            ></Marker>
          ))}
        </StyledMap>
      </Column>
      <BottomSheetComponent harbor={currentHarbor} isOpen={bottomSheetOpen} />
    </>
  );
};

const StyledMap = styled(MapView)`
  width: ${Dimensions.get("window").width}px;
  height: ${Dimensions.get("window").height}px;
`;

export default MapComponent;
