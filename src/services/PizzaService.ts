import { IPizza } from "@/types/pizzaType";
import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;

export const PizzaService = {
  async getAll() {
    const { data } = await axios.get<IPizza[]>("/api/pizzas");
    return data;
  },
  async getById(id: string) {
    const { data } = await axios.get<IPizza[]>(`/api/pizzas/${id}`);
    return data;
  },
};
