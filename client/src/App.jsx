import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  // Store our games data in state
  const [games, setGames] = useState([]);

  // Function to get data
  async function getGames(event) {
    event.preventDefault();
    const API = `http://localhost:8080/games?year=${event.target.year.value}`;
    const res = await axios.get(API);
    setGames(res.data);
  }

  return (
    <>
      <form onSubmit={getGames}>
        <input name="year" placeholder="Year" />
        <button>Get Games</button>
      </form>

      {games.map((game) => {
        return (
          <div>
            <h2>{game.name}</h2>
            <h3>Year: {game.year}</h3>
          </div>
        );
      })}
    </>
  );
}

export default App;
