import { API_URL } from "./config";
import { TDeck } from "./GetDeck";

export async function deleteCard(id: string, index: number): Promise<TDeck> {
  const response = await fetch(`${API_URL}/decks/${id}/cards/${index}`, {
    method: "DELETE",
  });
  return response.json();
}
