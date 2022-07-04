import { Column, Text } from "../ui";
import * as Linking from "expo-linking";

import { Button, Pressable, View } from "react-native";

export default function InfoScreen() {
  return (
    <Column>
      <View>
        <Text bold>FOR MORE INFORMATION CHECKOUT THIS REPO:</Text>
      </View>
      <Button
        title="GitHub"
        onPress={() => Linking.openURL("https://github.com/t0ma5h/harba")}
      ></Button>
    </Column>
  );
}
