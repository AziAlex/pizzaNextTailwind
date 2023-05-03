import type { NextApiRequest, NextApiResponse } from "next";
import { pizzas } from "../../../../dataPizza";
import { IPizza } from "@/types/pizzaType";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IPizza>
) {
  try {
    const { id } = req.query;

    if (isNaN(Number(id)) || Number(id) < 0 || Number(id) > pizzas.length) {
      return res.redirect("/404");
    }

    res.status(200).json(pizzas[parseInt(`${id}`)]);
  } catch (err) {
    res.status(500);
  }
}
