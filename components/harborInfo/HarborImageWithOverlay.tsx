import styled from "styled-components/native";
import { Text } from "../../ui";
import { ActivityIndicator, View } from "react-native";
import ExpoFastImage from "expo-fast-image";
import { Harbor } from "../../constants/types";
import useHarborWeather from "../../hooks/useWeather";
import { getNowTemperature } from "../../ui/helpers/weatherHelpers";

type ErrorLabelProps = {
  harbor: Harbor;
};

const HarborImageWithOverlay = ({ harbor }: ErrorLabelProps): JSX.Element => {
  const { data, isLoading, isSuccess } = useHarborWeather(
    harbor.lon,
    harbor.lat
  );
  return (
    <>
      <WaveOverlay>
        <WaveImage
          source={require("../../assets/images/wave.png")}
          resizeMode={"contain"}
        />
        <HarborNameContainer>
          <Text bold fontSize={14} numberOfLines={2}>
            {harbor.name}
          </Text>
        </HarborNameContainer>
      </WaveOverlay>
      <TemperatureOverlay>
        <TemperatureContainer>
          {!isSuccess ? (
            <WeatherLoader />
          ) : (
            <Text bold fontSize={24}>
              {getNowTemperature(data) + " " + data.hourly_units.temperature_2m}
            </Text>
          )}
        </TemperatureContainer>
      </TemperatureOverlay>
    </>
  );
};

const WaveImage = styled(ExpoFastImage).attrs({
  tintColor: "rgba(134, 199, 246, 0.7)",
})`
  width: 200%;
  height: 200%;
  position: absolute;
`;

const TemperatureContainer = styled.View`
  width: 50%;
  height: 80%;
  align-items: center;
  justify-content: flex-end;
`;

const HarborNameContainer = styled.View`
  width: 40%;
  height: 100%;
  padding-top: ${({ theme }) => theme.paddings.buttonContainer};
  padding-bottom: ${({ theme }) => theme.paddings.buttonContainer};
  align-items: center;
  justify-content: flex-end;
`;

const WaveOverlay = styled.View`
  position: absolute;
  bottom: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20%;
`;

const TemperatureOverlay = styled.View`
  position: absolute;
  top: -30%;
  background-color: rgba(134, 199, 246, 0.7);
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 50%;
  border-radius: 500px;
`;

const WeatherLoader = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.palette.primary,
  size: "small",
}))``;

export default HarborImageWithOverlay;
