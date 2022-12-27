import { useEffect, useState } from "react";
import "./App.css";
import { TDeck } from "./api/GetDeck";
import { useParams } from "react-router-dom";
import { createCard } from "./api/CreateCard";
import { getCards } from "./api/GetCards";
import { deleteCard } from "./api/DeleteCard";
import { Header } from "./Header";

function Cards() {
  const [deck, setDeck] = useState<TDeck | undefined>();
  const [cards, setCards] = useState<string[]>([]);
  const [text, setText] = useState("");
  const { deckId } = useParams();

  async function handleCreateCard(e: React.FormEvent) {
    e.preventDefault();

    const { cards: serverCards } = await createCard(deckId!, text);
    setText("");
    setCards(serverCards);
  }

  async function handleDeleteCard(index: number) {
    if (!deckId) return;
    const newCards = await deleteCard(deckId, index);
    setCards(newCards.cards);
  }

  useEffect(() => {
    (async function () {
      if (!deckId) return;
      const response = await getCards(deckId);
      setDeck(response);
      setCards(response.cards);
    })();
  }, [deckId]);

  return (
    <div className="App">
      <Header />
      <ul className="decks">
        {cards.map((cards, index) => (
          <li key={cards}>
            <button id="del" onClick={() => handleDeleteCard(index)}>
              X
            </button>
            {cards}
          </li>
        ))}
      </ul>
      <form onSubmit={handleCreateCard}>
        <label htmlFor="card-title">Card Text</label>
        <input
          id="card-title"
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setText(e.target.value);
          }}
        />
        <button>Create Card</button>
      </form>
    </div>
  );
}

export default Cards;
