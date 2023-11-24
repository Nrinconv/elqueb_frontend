import axios from "axios";

const apiUrl = " localhost:8000";

export const busquedaInfo = async (busqueda) => {
  const response = await axios.post(`${apiUrl}/ofertas/semanticSearch`, {
    params: {
      search_term: busqueda,
    },
    /* headers: "getHeaders()", */
  });

  return response;
};

export const recommendedInfo = async (id) => {
  const response = await axios.get(`${apiUrl}/ofertas/recommendOfertas/${id}`, {
    /* params: {
      start_date,
      end_date,
    },
    headers: "getHeaders()", */
  });

  return response;
};
