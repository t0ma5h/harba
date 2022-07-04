import { useQuery } from "react-query";
import axios from "axios";
import { Weather } from "../constants/types/Weather";

const fetchWeather = async (longitude: number, latitude: number) => {
  const { data } = await axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`
  );
  return data;
};

const useHarborWeather = (
  longitude: number | string,
  latitude: number | string
) =>
  useQuery<Weather>(["weather", longitude, latitude], () =>
    fetchWeather(Number(longitude), Number(latitude))
  );
export default useHarborWeather;
