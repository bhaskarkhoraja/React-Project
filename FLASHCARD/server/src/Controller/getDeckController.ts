import { Request, Response } from "express";
import DeckModel from "../Models/Deck";

export async function getDeckController(req: Request, res: Response) {
  const Decks = await DeckModel.find();
  res.send(Decks);
}
