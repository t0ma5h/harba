export type Weather = {
  latitude: number;
  longitude: number;
  elevation: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  hourly: HourlyTemperatures;
  hourly_units: HourlyUnits;
};

export type HourlyTemperatures = {
  temperature_2m: Array<number>;
  time: Array<string>;
};

export type HourlyUnits = {
  times: string;
  temperature_2m: string;
};
