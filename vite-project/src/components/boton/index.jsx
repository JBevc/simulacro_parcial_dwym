import { Modal } from "../modal";
import { useState } from "react";

export function Boton({ createGame }) {
  const [visible, setVisible] = useState("none");

  function openModal() {
    setVisible("block");
  }

  return (
    <>
      <button className="button is-light" onClick={openModal}>
        Agregar juego
      </button>
      <Modal
        visible={visible}
        setVisible={setVisible}
        createGame={createGame}
      ></Modal>
    </>
  );
}
