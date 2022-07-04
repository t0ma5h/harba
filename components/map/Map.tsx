import { Column } from "../../ui";
import MapView, { Marker } from "react-native-maps";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { Harbor } from "../../constants/types";
import BottomSheetComponent from "../bottomSheet/BottomSheet";
import { useState } from "react";
import useHarbors from "../../hooks/useHarbors";
import HarborsLoader from "../loaders/HarborsLoader";

const MapComponent = () => {
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [currentHarbor, setCurrentHarbor] = useState<Harbor | undefined>(
    undefined
  );

  //can be subtituted by location prompt later
  const defaultLocation = { lat: 55.714763, long: 21.063 };

  const toggleModal = (harbor: Harbor) => {
    setCurrentHarbor(harbor);
    setBottomSheetOpen(true);
  };
  const { data, isLoading, isSuccess } = useHarbors();
  return (
    <>
      <Column>
        <StyledMap
          initialRegion={{
            latitude: defaultLocation.lat,
            longitude: defaultLocation.long,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onTouchStart={() => bottomSheetOpen && setBottomSheetOpen(false)}
        >
          {isSuccess
            ? data.map((harbor: Harbor) => (
                <Marker
                  key={harbor.id}
                  coordinate={{
                    latitude: Number(harbor.lat),
                    longitude: Number(harbor.lon),
                  }}
                  onPress={() => toggleModal(harbor)}
                >
                  {/* THE CUSTOM MARKER CAUSED FOME PERFORMANCE ISSUES AS IT SHOULD BE ADDED A BIT DIFFERENTLY */}
                  {/* <CustomMarker
                    source={require("../../assets/images/marker.png")}
                    resizeMode={"contain"}
                  ></CustomMarker> */}
                </Marker>
              ))
            : undefined}
        </StyledMap>
      </Column>
      <HarborsLoader isLoading={isLoading} />
      <BottomSheetComponent harbor={currentHarbor} isOpen={bottomSheetOpen} />
    </>
  );
};

const StyledMap = styled(MapView)`
  width: ${Dimensions.get("window").width}px;
  height: ${Dimensions.get("window").height}px;
`;

const CustomMarker = styled.Image`
  width: 50px;
  height: 50px;
`;

export default MapComponent;
