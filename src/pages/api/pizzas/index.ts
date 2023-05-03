import type { NextApiRequest, NextApiResponse } from "next";
import { pizzas } from "../../../../dataPizza";
import { IPizza } from "@/types/pizzaType";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IPizza[]>
) {
  try {
    res.status(200).json(pizzas);
  } catch (err) {
    res.status(500);
  }
}
