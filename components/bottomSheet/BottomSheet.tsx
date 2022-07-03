import { useCallback, useEffect, useMemo, useRef } from "react";
import { Text } from "../../ui";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import styled from "styled-components/native";
import { useTheme } from "styled-components/native";
import { Harbor } from "../../constants/types";
import HarborInfo from "./HarborInfo";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BookingButton from "./BookingButton";

type BottomSheetProps = {
  harbor?: Harbor;
  isOpen: boolean;
};

const BottomSheetComponent = ({ harbor, isOpen }: BottomSheetProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const theme = useTheme();
  const navigation = useNavigation();
  const snapPoints = useMemo(() => ["65%", "80%"], []);

  useEffect(() => {
    isOpen ? bottomSheetRef.current?.expand() : bottomSheetRef.current?.close();
  }, [isOpen]);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose
      backgroundStyle={{
        backgroundColor: theme.palette.secondary,
      }}
      handleStyle={{
        backgroundColor: theme.palette.primary,
        borderTopLeftRadius: "24px",
        borderTopRightRadius: "24px",
        paddingTop: 24,
      }}
      handleIndicatorStyle={{
        backgroundColor: theme.palette.secondary,
      }}
    >
      <SheetContentCotainer>
        {harbor ? <HarborInfo harbor={harbor} /> : <Text>No HARBOR!</Text>}
        <BookingButton
          title="Book"
          onPress={() => {
            navigation.navigate("Modal");
          }}
        />
      </SheetContentCotainer>
    </BottomSheet>
  );
};

export default BottomSheetComponent;

const SheetContentCotainer = styled.View.attrs({
  contentContainerProps: {
    alignItems: "center",
    justifyContent: "center",
  },
})`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.primary};
`;
