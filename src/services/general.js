import axios from "axios";

const apiUrl = " localhost:8001/";

export const MapDataInfo = async (start_date, end_date) => {
  const response = await axios.get(`${apiUrl}/`, {
    params: {
      start_date,
      end_date,
    },
    headers: "getHeaders()",
  });

  return response.data;
};
