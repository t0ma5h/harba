import {
  Dimensions,
  Image,
  StyleSheet,
  View,
  Text,
  Pressable,
} from "react-native";
import { Column } from "../../ui";
import ExpoFastImage from "expo-fast-image";
import { Harbor } from "../../constants/types";
import { TouchableHighlight } from "react-native-gesture-handler";
import Carousel from "react-native-snap-carousel";
import { useRef } from "react";
import { useNotifications } from "react-native-notificated";
import styled, { useTheme } from "styled-components/native";

type HarborInfoProps = {
  harbor: Harbor;
};
const HarborInfo = ({ harbor }: HarborInfoProps) => {
  console.log(harbor.image);
  const isCarousel = useRef(null);
  const theme = useTheme();

  return (
    <Column
      style={{
        overflow: "hidden",
        justifyContent: "flex-start",
        alignSelf: "center",
        borderRadius: Dimensions.get("screen").width / 2,
        width: Dimensions.get("screen").width - 24,
        height: Dimensions.get("screen").width / 2 - 24,
        padding: 12,
      }}
    >
      <View
        style={{
          overflow: "hidden",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(134, 199, 246, 1)",
          borderRadius: Dimensions.get("screen").width / 2,
          width: Dimensions.get("screen").width - 24,
          height: Dimensions.get("screen").width - 24,
          borderWidth: 12,
          borderColor: "rgba(134, 199, 246, 0.7)",
          alignSelf: "center",
        }}
      >
        <Carousel
          layout="stack"
          layoutCardOffset={0}
          ref={isCarousel}
          style={{ padding: 0, margin: 0, justifyContent: "center" }}
          data={[
            "https://harba.co/wp-content/uploads/2021/09/Lango-Lystbadehavn-from-above-255x255.jpg",
            "https://harba.co/wp-content/uploads/2021/09/Lango-Lystbadehavn-from-above-255x255.jpg",
            "https://harba.co/wp-content/uploads/2021/09/Lango-Lystbadehavn-from-above-255x255.jpg",
          ]}
          renderItem={CarouselCardItem}
          sliderWidth={Dimensions.get("screen").width - 24}
          itemWidth={Dimensions.get("screen").width - 24}
          inactiveSlideShift={0}
          useScrollView={true}
          indicatorStyle={"white"}
        />

        <Overlay>
          <ExpoFastImage
            style={{
              width: "200%",
              height: "200%",
              tintColor: "rgba(134, 199, 246, 0.7)",
              position: "absolute",
            }}
            source={require("../../assets/images/wave.png")}
            resizeMode={"contain"}
          />
          <View
            style={{
              width: "40%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: 12,
              paddingBottom: 6,
            }}
          >
            <Text
              style={{
                fontFamily: "raleway-bold",
                fontWeight: "400",
                color: theme.palette.primary,
                fontSize: 14,
                alignItems: "center",
                textAlign: "center",
              }}
              numberOfLines={2}
            >
              {harbor.name}
            </Text>
          </View>
        </Overlay>

        <Overlay2>
          <View
            style={{
              width: "50%",
              height: "80%",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Text
              style={{
                fontFamily: "raleway-bold",
                fontWeight: "400",
                color: theme.palette.primary,
                fontSize: 24,
                alignItems: "center",
                textAlign: "center",
              }}
              numberOfLines={2}
            >
              20
            </Text>
          </View>
        </Overlay2>
      </View>
    </Column>
  );
};

const CarouselCardItem = ({ item, index }) => {
  const { notify } = useNotifications();

  return (
    <Pressable
      onPress={() =>
        notify("success", {
          params: {
            title: "Hello",
            description: "Wow, that was easy",
          },
        })
      }
    >
      <ExpoFastImage
        style={{
          borderRadius: Dimensions.get("screen").width / 2,

          width: "100%",
          height: "100%",
          alignSelf: "center",
        }}
        source={{
          uri: "https://harba.co/wp-content/uploads/2021/09/Lango-Lystbadehavn-from-above-255x255.jpg",
        }}
        resizeMode={"cover"}
      />
    </Pressable>
  );
};

const Overlay = styled.View`
  position: absolute;
  bottom: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20%;
`;

const Overlay2 = styled.View`
  position: absolute;
  top: -30%;
  background-color: rgba(134, 199, 246, 0.7);
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 50%;
  border-radius: 500px;
`;

export default HarborInfo;
