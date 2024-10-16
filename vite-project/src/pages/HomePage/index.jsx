import { Boton } from "../../components/boton";
import "./HomePage.css";
import { GameDiv } from "../../components/gameDiv";

export function Home({ games, createGame, deleteGame }) {
  return (
    <div className="homeBackground">
      <div className="home">
        <h1 className="title is-1">Juegos Olimpicos</h1>
        <div className="botonAgregar">
          <Boton createGame={createGame} />
        </div>
        <GameDiv games={games} deleteGame={deleteGame} />
      </div>
    </div>
  );
}
