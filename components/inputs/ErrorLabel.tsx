import styled from "styled-components/native";
import { Text } from "../../ui";
import { View } from "react-native";

type ErrorLabelProps = {
  error?: string;
};

const ErrorLabel = ({ error }: ErrorLabelProps): JSX.Element => {
  return (
    <View>
      <Text bold style={{ color: "red" }}>
        {error?.toString()}
      </Text>
    </View>
  );
};

export default ErrorLabel;
