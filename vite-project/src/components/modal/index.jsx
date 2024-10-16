import "./Modal.css";

export function Modal({ visible, setVisible, createGame }) {
  function addGame(e) {
    e.preventDefault();

    const newGame = {
      title: e.target.title.value,
      description: e.target.description.value,
      players: e.target.players.value,
      categories: e.target.category.value,
    };

    createGame(newGame);
    closeModal();
  }

  function closeModal() {
    setVisible("none");
  }

  return (
    <div className="modal" style={{ display: visible }}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="box contentModal">
          <h1 className="title is-1"> Nuevo juego</h1>
          <form onSubmit={addGame}>
            <div className="columns is-mobile">
              <div className="column">
                <div className="box boxField">
                  <div className="field">
                    <label className="label">Nombre</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        name="title"
                        placeholder="Ingrese nombre del juego"
                      />
                    </div>
                  </div>
                </div>
                <div className="box boxField">
                  <div className="field">
                    <label className="label">Descripcion</label>
                    <div className="control">
                      <input
                        className="input"
                        id=""
                        type="text"
                        name="description"
                        placeholder="Ingrese descripcion"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="box boxField">
                  <div className="field">
                    <label className="label">Cantidad de jugadores</label>
                    <div className="control">
                      <input
                        className="input"
                        type="number"
                        name="players"
                        placeholder="Ingrese un numero"
                      />
                    </div>
                  </div>
                </div>
                <div className="box boxField">
                  <div className="field">
                    <label className="label">Categoría</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        name="category"
                        placeholder="Ingrese una categoría"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="button is-outlined" onClick={closeModal}>
              Cancelar
            </button>
            <button className="button is-outlined" type="submit">
              Aceptar
            </button>
          </form>
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={closeModal}
      ></button>
    </div>
  );
}
