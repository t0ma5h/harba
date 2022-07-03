import { useState } from "react";
import { Alert, Platform } from "react-native";
import styled from "styled-components/native";
import { Column } from "../ui";
import { useForm } from "react-hook-form";
import BookingButton from "../components/bottomSheet/BookingButton";
import BoatNameInput from "../components/inputs/BoatNameInput";
import BoatLengthInput from "../components/inputs/BoatLengthInput";
import { useNotifications } from "react-native-notificated";
import { useNavigation } from "@react-navigation/native";

export default function ModalScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const { notify } = useNotifications();
  const navigation = useNavigation();

  const onSubmit = () => {
    navigation.goBack();
    notify("success", {
      params: {
        title: "Booking Successful!",
      },
    });
  };

  return (
    <ScreenWrapper behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <BoatNameInput control={control} errors={errors} />
      <BoatLengthInput control={control} errors={errors}></BoatLengthInput>
      <BookingButton
        title={"Submit"}
        height={"12%"}
        width={"90%"}
        onPress={handleSubmit(onSubmit)}
      />
    </ScreenWrapper>
  );
}

const ScreenWrapper = styled.KeyboardAvoidingView`
  background-color: ${({ theme }) => theme.palette.primary};
  flex: 1;
  justify-content: center;
  align-items: center;
`;
