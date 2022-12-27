import { Request, Response } from "express";
import DeckModel from "../Models/Deck";

export async function deleteDeckController(req: Request, res: Response) {
  const deletedDeck = await DeckModel.findByIdAndDelete(req.params.deckId);
  res.send(deletedDeck);
}
