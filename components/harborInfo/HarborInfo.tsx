import { Dimensions } from "react-native";
import { Column } from "../../ui";
import { Harbor } from "../../constants/types";
import Carousel from "react-native-snap-carousel";
import { useRef } from "react";
import styled from "styled-components/native";
import { HarborImage } from "./HarborImage";
import HarborImageWithOverlay from "./HarborImageWithOverlay";

type HarborInfoProps = {
  harbor: Harbor;
};

type CarouselItem = {
  index: number;
  item: string;
};

const HarborInfo = ({ harbor }: HarborInfoProps) => {
  return (
    <InfoWrapper>
      <CarouselContainer>
        <Carousel
          layout="stack"
          layoutCardOffset={0}
          style={{ padding: 0, margin: 0, justifyContent: "center" }}
          data={[
            "https://harba.co/wp-content/uploads/2021/09/Lango-Lystbadehavn-from-above-255x255.jpg",
            "https://harba.co/wp-content/uploads/2019/01/1-Asaa-havn-255x255.jpg",
            "https://harba.co/wp-content/uploads/2020/09/Aarhus-Slipway-Association-night-view-min-255x255.jpg",
          ]} //// Images from API were not available, 404
          renderItem={CarouselCardItem}
          sliderWidth={Dimensions.get("window").width - 24}
          itemWidth={Dimensions.get("window").width - 24}
          inactiveSlideShift={0}
          useScrollView={true}
          indicatorStyle={"white"}
        />
        <HarborImageWithOverlay harbor={harbor} />
      </CarouselContainer>
    </InfoWrapper>
  );
};

const CarouselCardItem = ({ item }: CarouselItem) => {
  if (!item) return null;
  return (
    <HarborImage
      source={{
        uri: item,
      }}
      resizeMode={"contain"}
    ></HarborImage>
  );
};

const InfoWrapper = styled(Column)`
  overflow: hidden;
  justify-content: flex-start;
  width: ${Dimensions.get("screen").width - 24}px;
  height: ${Dimensions.get("screen").width / 2 - 24}px;
  padding: 12px;
  border-radius: ${Dimensions.get("screen").width / 2}px;
  align-self: center;
`;

const CarouselContainer = styled.View`
  overflow: hidden;
  background-color: rgba(134, 199, 246, 1);
  bottom: 0;
  align-items: center;
  justify-content: center;
  width: ${Dimensions.get("window").width - 24}px;
  height: ${Dimensions.get("window").width - 24}px;
  border-radius: ${Dimensions.get("screen").width / 2};
  border-width: ${({ theme }) => theme.paddings.buttonContainer};
  border-color: rgba(134, 199, 246, 0.7);
  align-self: center;
`;

export default HarborInfo;
