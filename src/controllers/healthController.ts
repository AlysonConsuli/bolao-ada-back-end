import { Request, Response } from "express";
import { gamesService } from "../services/gamesService.js";

export const appHealth = async (req: Request, res: Response) => {
  const games = await gamesService.getGames();
  res.send({ games });
};
