import { Platform } from "react-native";
import styled from "styled-components/native";
import { useForm } from "react-hook-form";
import BookingButton from "../components/bottomSheet/BookingButton";
import BoatNameInput from "../components/inputs/BoatNameInput";
import BoatLengthInput from "../components/inputs/BoatLengthInput";
import { useNotifications } from "react-native-notificated";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import DatePicker from "../components/datePicker/DatePicker";

export default function ModalScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const { notify } = useNotifications();
  const navigation = useNavigation();
  const [datesCorrect, setDatesCorrect] = useState(false);

  const onSubmit = () => {
    if (datesCorrect) {
      navigation.goBack();
      notify("success", {
        params: {
          title: "Booking Successful!",
        },
      });
    }
  };

  return (
    <ScreenWrapper behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <BoatNameInput control={control} errors={errors} />
      <BoatLengthInput control={control} errors={errors}></BoatLengthInput>
      <DatePicker setValid={setDatesCorrect} />
      <BookingButton
        disabled={!datesCorrect || !isValid}
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
  padding-top: ${({ theme }) => theme.paddings.screenContainer};
  align-items: center;
`;
