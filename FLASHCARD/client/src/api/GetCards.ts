import { API_URL } from "./config";
import { TDeck } from "./GetDeck";

export async function getCards(deckId: string): Promise<TDeck> {
  const response = await fetch(`${API_URL}/decks/${deckId}`).then((response) =>
    response.json()
  );
  return response;
}
