import { useEffect, useMemo, useRef } from "react";
import { Column, Text } from "../../ui";
import BottomSheet from "@gorhom/bottom-sheet";
import styled from "styled-components/native";
import { Harbor } from "../../constants/types";
import HarborInfo from "../harborInfo/HarborInfo";
import { useNavigation } from "@react-navigation/native";
import BookingButton from "./BookingButton";

type BottomSheetProps = {
  harbor?: Harbor;
  isOpen: boolean;
};

const BottomSheetComponent = ({ harbor, isOpen }: BottomSheetProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const navigation = useNavigation();
  const snapPoints = useMemo(() => ["65%", "80%"], []);

  useEffect(() => {
    isOpen ? bottomSheetRef.current?.expand() : bottomSheetRef.current?.close();
  }, [isOpen]);

  return (
    <Sheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose
    >
      <SheetContentCotainer>
        {harbor ? (
          <HarborInfo harbor={harbor} />
        ) : (
          <Column>
            <Text bold color={"white"}>
              No harbor info available!
            </Text>
          </Column>
        )}
        <BookingButton
          title="Book"
          onPress={() => {
            navigation.navigate("Modal");
            bottomSheetRef.current?.close();
          }}
        />
      </SheetContentCotainer>
    </Sheet>
  );
};

export default BottomSheetComponent;

const Sheet = styled(BottomSheet).attrs(({ theme }) => ({
  backgroundStyle: {
    backgroundColor: theme.palette.secondary,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 24,
  },
  handleStyle: {
    backgroundColor: theme.palette.primary,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 24,
  },
  handleIndicatorStyle: {
    backgroundColor: theme.palette.secondary,
  },
}))``;

const SheetContentCotainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: ${({ theme }) => theme.palette.primary};
`;
