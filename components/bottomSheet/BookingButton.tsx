import { Pressable, StyleSheet } from "react-native";
import { Column, Text } from "../../ui";
import styled from "styled-components/native";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { Dimensions } from "../../constants/types/Dimensions";

type BookingButtonProps = {
  onPress?: () => void;
  title: string;
  disabled?: boolean;
} & Dimensions;

const BookingButton = ({
  onPress,
  title,
  width,
  height,
  disabled,
}: BookingButtonProps) => {
  return (
    <BookingButtonTouchable
      width={width}
      disabled={disabled}
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

const BookingButtonTouchable = styled(TouchableOpacity)<Dimensions>`
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.palette.disabled : theme.palette.secondary};
  align-self: center;
  position: absolute;
  bottom: 0;
  width: ${({ width }) => (width ? width : `80%`)};
  height: ${({ height }) => (height ? height : `15%`)};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export default BookingButton;
