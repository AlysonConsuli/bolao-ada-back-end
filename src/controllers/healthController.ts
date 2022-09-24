import { Request, Response } from "express";

export const appHealth = async (req: Request, res: Response) => {
  res.sendStatus(200);
};
