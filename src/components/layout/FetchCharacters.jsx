import axios from "axios";

const FUTURAMA_API_URL = "https://futuramaapi.com/api/characters/";

export const fetchCharacters = async () => {
  try {
    const response = await axios.get(FUTURAMA_API_URL);
    return response.data.items;
  } catch (error) {
    console.error("Error al cargar los personajes:", error);
    return [];
  }
};
