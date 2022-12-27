import { useEffect, useState } from "react";
import "./App.css";
import { deleteDeck } from "./api/DeleteDecks";
import { createDeck } from "./api/CreateDeck";
import { getDecks, TDeck } from "./api/GetDeck";
import { Link } from "react-router-dom";
import { Header } from "./Header";

function App() {
  const [decks, setDecks] = useState<TDeck[]>([]);
  const [title, setTitle] = useState("");

  async function handleCreateDeck(e: React.FormEvent) {
    e.preventDefault();

    const response = await createDeck(title);
    setTitle("");
    setDecks([...decks, response]);
  }

  async function handleDeleteDeck(id: string) {
    await deleteDeck(id);
    setDecks(decks.filter((decks) => decks._id !== id));
  }

  useEffect(() => {
    (async function () {
      const response = await getDecks();
      setDecks(response);
    })();
  }, []);

  return (
    <div className="App">
      <Header />
      <ul className="decks">
        {decks.map((decks) => (
          <li key={decks._id}>
            <button id="del" onClick={() => handleDeleteDeck(decks._id)}>
              X
            </button>
            <Link to={`decks/${decks._id}`}>{decks.title}</Link>
          </li>
        ))}
      </ul>
      <form onSubmit={handleCreateDeck}>
        <label htmlFor="deck-title">Deck Title</label>
        <input
          id="deck-title"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
        />
        <button>Create Deck</button>
      </form>
    </div>
  );
}

export default App;
