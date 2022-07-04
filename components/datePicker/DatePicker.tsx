import { useState, useCallback, useEffect } from "react";
import { Button } from "react-native-paper";

import { DatePickerModal } from "react-native-paper-dates";
import styled from "styled-components/native";
import { Text } from "../../ui";
import { dateToString } from "../../ui/helpers/dateHelpers";
import ErrorLabel from "../inputs/ErrorLabel";
import { InputLabel } from "../labels/InputLabel";

type DatePickerProps = {
  setValid: (value: boolean) => void;
};

const DatePicker = ({ setValid }: DatePickerProps): JSX.Element => {
  const [range, setRange] = useState<{
    startDate: Date | undefined;
    endDate: Date | undefined;
  }>({ startDate: undefined, endDate: undefined });

  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if ((!range?.startDate || !range.endDate) && loaded) {
      setError("The dates should not be empty!");
    } else {
      setError(undefined);
      if (loaded) {
        setValid(true);
      }
    }
  }, [range, setError]);

  const onDismiss = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirm = useCallback(
    ({ startDate, endDate }) => {
      setOpen(false);
      setRange({ startDate, endDate });
    },
    [setOpen, setRange]
  );

  return (
    <PickerContainer>
      <InputLabel bold>Select booking period</InputLabel>
      <DatesContainer
        onPress={() => {
          setOpen(true);
          setLoaded(true);
        }}
      >
        <Text bold>
          {range.startDate ? dateToString(range.startDate) : "--/--/--"}
        </Text>
        <Text bold>
          {range.endDate ? dateToString(range.endDate) : "--/--/--"}
        </Text>
      </DatesContainer>
      <ErrorLabel error={error}></ErrorLabel>
      <DatePickerModal
        locale="en"
        mode="range"
        visible={open}
        onDismiss={onDismiss}
        startDate={range.startDate}
        endDate={range.endDate}
        onConfirm={onConfirm}
        disableStatusBar
        validRange={{
          startDate: new Date(),
        }}
        label="Select harbor booking period"
        startLabel="From"
        endLabel="To"
      />
    </PickerContainer>
  );
};

export default DatePicker;

const DatesContainer = styled.Pressable`
  padding: 12px;
  height: 100%;
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;
  margin: ${({ theme }) => theme.margins.button};
  background-color: #e8e8e8;
  border-radius: 50px;
  flex-direction: row;
  justify-content: space-between;
`;

const PickerContainer = styled.View`
  margin-top: 15%;
  align-items: center;
  width: 80%;
  height: 7%;
`;
