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
const HarborInfo = ({ harbor }: HarborInfoProps) => {
  const isCarousel = useRef(null);
  return (
    <InfoWrapper>
      <CarouselContainer>
        <Carousel
          layout="stack"
          layoutCardOffset={0}
          ref={isCarousel}
          style={{ padding: 0, margin: 0, justifyContent: "center" }}
          data={[
            +"https://harba.co/wp-content/uploads/2021/09/Lango-Lystbadehavn-from-above-255x255.jpg",
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
        <HarborImageWithOverlay harbor={harbor} />
      </CarouselContainer>
    </InfoWrapper>
  );
};

const CarouselCardItem = () => {
  return (
    <HarborImage
      source={{
        uri: "https://harba.co/wp-content/uploads/2021/09/Lango-Lystbadehavn-from-above-255x255.jpg", //// Images from API were not available, 404
      }}
      resizeMode={"cover"}
    ></HarborImage>
  );
};

const InfoWrapper = styled(Column)`
  overflow: hidden;
  justify-content: flex-start;
  width: ${Dimensions.get("screen").width - 24};
  height: ${Dimensions.get("screen").width / 2 - 24};
  padding: 12px;
  border-radius: ${Dimensions.get("screen").width / 2};
  align-self: center;
`;

const CarouselContainer = styled.View`
  overflow: hidden;
  background-color: rgba(134, 199, 246, 1);
  bottom: 0;
  align-items: center;
  justify-content: center;
  width: ${Dimensions.get("screen").width - 24};
  height: ${Dimensions.get("screen").width - 24};
  border-radius: ${Dimensions.get("screen").width / 2};
  border-width: ${({ theme }) => theme.paddings.buttonContainer};
  border-color: rgba(134, 199, 246, 0.7);
  align-self: center;
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
