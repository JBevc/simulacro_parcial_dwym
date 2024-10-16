import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./GamePage.css";

const url = `http://localhost:3000/api/games`;

export function GamePage() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchGameDetails() {
      try {
        const response = await fetch(`${url}/${id}`);
        const data = await response.json();
        console.log("Respuesta del servidor:", data);
        setGame(data[0]);
      } catch (error) {
        console.error("Error fetching game details:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchGameDetails();
  }, [id]);

  function goBackHome() {
    navigate(`/`);
  }

  return (
    !isLoading && (
      <div className="gamePage">
        <div className="box gamePageBox">
          <div className="botonDiv">
            <button
              className="button is-success is-light backButton"
              onClick={goBackHome}
            >
              Atrás
            </button>
          </div>
          <div className="textInfoDiv">
            <h1 className="title title-is-1 gameTitle"> {game.title} </h1>
            <div className="gameInfo">
              <p className="pInfo">
                <strong className="textStrong">Descripción: </strong>
                {game.description}
              </p>
              <p className="pInfo">
                <strong className="textStrong">Cantidad de jugadores: </strong>
                {game.players}
              </p>
              <p className="pInfo">
                <strong className="textStrong">Categorías: </strong>
                {game.categories}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
