import axios from "axios";

const apiUrl = "http://localhost:8000";

export const busquedaInfo = async (busqueda) => {
  const response = await axios.post(`${apiUrl}/ofertas/semanticSearch`, {
    search_term: busqueda,
    /* headers: "getHeaders()", */
  });

  return response.data;
};

export const recommendedInfo = async (id) => {
  const response = await axios.get(`${apiUrl}/ofertas/recommendOfertas/${id}`, {
    /* params: {
      id,
    }, */
    /* 
    headers: "getHeaders()", */
  });

  return response.data;
};
