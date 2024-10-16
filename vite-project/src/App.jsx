import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { Home } from "./pages/HomePage";
import { GamePage } from "./pages/GamePage";

const url = "http://localhost:3000/api/games";

function App() {
  const [games, setGames] = useState([]);

  async function fetchDataAW() {
    try {
      const response = await fetch(url, { method: "GET" });
      const data = await response.json(); // extract JSON from response
      console.log(data);
      setGames(data);
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  }

  async function createGame(newGame) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newGame),
      });

      const data = await response.json();
      setGames(data);

      return data;
    } catch (error) {
      console.log("Error posting data: ", error);
    }
  }

  async function deleteGame(id) {
    try {
      await fetch(`${url}/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.log("Error deleting game: ", error);
    }
  }

  function deleteHandler(id) {
    deleteGame(id);
    setGames([...games.filter((game) => game.id !== id)]);
  }

  useEffect(() => {
    fetchDataAW();
  }, []);

  return (
    <>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/*" element={<Navigate replace to="/" />} />
            <Route
              path="/"
              element={
                <Home
                  games={games}
                  createGame={createGame}
                  deleteGame={deleteHandler}
                />
              }
            />
            <Route path="/game/:id" element={<GamePage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
