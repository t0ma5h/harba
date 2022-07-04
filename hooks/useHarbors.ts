import { useQuery } from "react-query";
import axios from "axios";
import { Harbor } from "../constants/types";

export const fetchHarbors = async () => {
  const { data } = await axios.get("https://api.harba.co/harbors/visible");
  return data;
};

const useHarbors = () => useQuery<Harbor[]>("harbors", fetchHarbors);
export default useHarbors;
