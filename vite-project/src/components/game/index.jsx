import { useNavigate } from "react-router-dom";
import "./Game.css";

export function Game(prop) {
  const navigate = useNavigate();

  function deleteGame() {
    prop.deleteGame(prop.id);
  }

  function goToDetails() {
    navigate(`/game/${prop.id}`);
  }

  return (
    <div className="box gameBox" id={prop.id}>
      <h1 className="title is-4"> {prop.title} </h1>
      <div className="divBoton">
        <button className="button is-outlined" onClick={goToDetails}>
          {" "}
          detalles{" "}
        </button>
        <button className="button is-outlined" onClick={deleteGame}>
          borrar
        </button>
      </div>
    </div>
  );
}
