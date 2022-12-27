import { API_URL } from "./config";
import { TDeck } from "./GetDeck";

export async function createCard(deckId: string, text: string): Promise<TDeck> {
  const response = await fetch(`${API_URL}/decks/${deckId}/cards`, {
    method: "POST",
    body: JSON.stringify({
      text,
    }),
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => response.json());
  return response;
}
