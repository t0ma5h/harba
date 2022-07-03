import { Pressable, StyleSheet } from "react-native";
import { Column, Text } from "../../ui";
import styled from "styled-components/native";
import { TouchableOpacity } from "@gorhom/bottom-sheet";

type BookingButtonProps = {
  onPress?: () => void;
  title: string;
  width?: string | number;
  height?: string | number;
};

const BookingButton = ({
  onPress,
  title,
  width,
  height,
}: BookingButtonProps) => {
  return (
    <BookingButtonTouchable
      width={width}
      activeOpacity={0.6}
      height={height}
      onPress={onPress}
    >
      <BookingButtonContainer>
        <Text bold>{title ? title : "Book"}</Text>
      </BookingButtonContainer>
    </BookingButtonTouchable>
  );
};

const BookingButtonContainer = styled(Column)`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const BookingButtonTouchable = styled(TouchableOpacity)<{
  width?: string | number;
  height?: string | number;
}>`
  background-color: ${({ theme }) => theme.palette.secondary};
  align-self: center;
  position: absolute;
  bottom: 0;
  width: ${({ width }) => (width ? width : `80%`)};
  height: ${({ height }) => (height ? height : `10%`)};
  border-top-left-radius: 20;
  border-top-right-radius: 20;
`;

export default BookingButton;
