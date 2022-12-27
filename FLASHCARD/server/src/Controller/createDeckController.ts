import { Request, Response } from "express";
import DeckModel from "../Models/Deck";

export async function createDeckController(req: Request, res: Response) {
  const newDeck = new DeckModel({
    title: req.body.title,
  });
  const currentDeck = await newDeck.save();
  res.send(currentDeck);
}
