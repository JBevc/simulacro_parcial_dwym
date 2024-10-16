import "./GameDiv.css";
import { Game } from "../game";

export function GameDiv({ games, deleteGame }) {
  return (
    <>
      <div className="divJuegos is-mobile">
        {games.map((game) => (
          <Game
            key={game.id}
            id={game.id}
            title={game.title}
            deleteGame={deleteGame}
          />
        ))}
      </div>
    </>
  );
}
