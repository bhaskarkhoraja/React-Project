import { Request, Response } from "express";
import DeckModel from "../Models/Deck";

export async function createCardController(req: Request, res: Response) {
  const deckId = req.params.deckId;
  const deck = await DeckModel.findById(deckId);
  if (!deck) return res.status(400).send("No decks were found");
  const { text } = req.body;

  deck.cards.push(text);
  await deck.save();
  res.send(deck);
}
