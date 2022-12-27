import express from "express";
import connectToMongo from "./db";
import cors from "cors";
import { getDeckController } from "./Controller/getDeckController";
import { createDeckController } from "./Controller/createDeckController";
import { deleteDeckController } from "./Controller/deleteDeckController";
import { createCardController } from "./Controller/createCardController";
import { getCardController } from "./Controller/getCardController";
import { deleteCardController } from "./Controller/deleteCardController";

const app = express();
// help read request in json
app.use(express.json());
app.use(cors());

const PORT = 8080;

app.get("/decks", getDeckController);

app.post("/decks", createDeckController);

app.delete("/decks/:deckId", deleteDeckController);

app.get("/decks/:deckId", getCardController);

app.post("/decks/:deckId/cards", createCardController);

app.delete("/decks/:deckId/cards/:index", deleteCardController);

connectToMongo();
app.listen(PORT);
