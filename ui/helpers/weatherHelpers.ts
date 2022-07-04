import { Weather } from "../../constants/types/Weather";
import { nowDateToWeatherDate } from "./dateHelpers";

export const getNowTemperature = (weather: Weather) => {
  const searchData = nowDateToWeatherDate();
  const index = weather.hourly.time.indexOf(searchData);
  return weather.hourly.temperature_2m[index];
};
