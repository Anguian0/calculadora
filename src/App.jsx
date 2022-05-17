import React, { useState } from "react";

function App() {
  const [inputState, setinputState] = useState({
    operacion: "",
    resultado: "",
  });

  const inicioEstado = JSON.parse(localStorage.getItem("historial")) || [];
  const [historial, setHistorial] = useState(inicioEstado);

  const handleInputChange = (event) => {
    setinputState({
      ...inputState,
      [event.target.name]: event.target.value,
    });
  };

  const handleNumeroClick = (event) => {
    setinputState({
      ...inputState,
      operacion: inputState.operacion + event.target.value,
    });
  };

  const handleOperadorClick = (event) => {
    setinputState({
      ...inputState,
      operacion: inputState.operacion + event.target.textContent,
    });
  };

  const handleResultado = () => {
    var datos = inputState.operacion;
    var res = eval(datos);

    localStorage.setItem(
      "historial",
      JSON.stringify([
        ...historial,
        {
          operacion: datos,
          resultado: res,
        },
      ])
    );
    setHistorial([
      ...historial,
      {
        operacion: datos,
        resultado: res,
      },
    ]);

    setinputState({
      ...inputState,
      operacion: res,
      resultado: "",
    });
  };

  const handleClickLimpiar = () => {
    setinputState({
      ...inputState,
      operacion: "",
      resultado: "",
    });
  };

  const handleResetHistorial = () => {
    setHistorial([]);
    localStorage.setItem("historial", JSON.stringify([]));
  };

  return (
    <div className="App container">
      <div className="row bg-light p-3 rounded-3 m-3 shadow-lg">
        <div className="col p-4">
          <h3 className="text-center">
            <i class="bi bi-clock-history"></i> HISTORIAL
          </h3>
          <hr />
          <div className="col">
            <div className="row m-4">
              <div className="row">
                {historial.length === 0 ? (
                  "El historial se encuentra sin datos"
                ) : (
                  <il>
                    {historial.map((item, index) => {
                      return (
                        <li className="fs-4">
                          {item.operacion} = {item.resultado} &nbsp;
                        </li>
                      );
                    })}
                  </il>
                )}
              </div>
            </div>
          </div>
          <div className="col text-center">
            <button
              className="btn btn-outline-danger borrar"
              onClick={handleResetHistorial}
            >
              BORRAR HISTORIAL
            </button>
          </div>
        </div>
        <div className="col mx-auto bg-light p-4">
          <h3 className="text-center">
            <i class="bi bi-calculator"></i> CASIO
          </h3>
          <hr />
          <div className="row">
            <div className="col m-3 mb-0">
              <div className="row">
                <input
                  className="form-control form-control-lg"
                  id="operacion"
                  name="operacion"
                  type="text"
                  onChange={handleInputChange}
                  value={inputState.operacion}
                ></input>
              </div>
              <br></br>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="row ms-0 me-0">
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  onClick={handleClickLimpiar}
                >
                  CE
                </button>
              </div>
            </div>

            <div className="col">
              <div className="row">
                <div className="col">
                  <div className="row ms-0 me-0">
                    <button
                      type="button"
                      className="btn btn-outline-dark"
                      onClick={handleOperadorClick}
                    >
                      /
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="row mt-3 ms-0 me-0">
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  value={7}
                  onClick={handleNumeroClick}
                >
                  7
                </button>
              </div>
            </div>

            <div className="col">
              <div className="row mt-3 ms-0 me-0">
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  value={8}
                  onClick={handleNumeroClick}
                >
                  8
                </button>
              </div>
            </div>

            <div className="col">
              <div className="row mt-3 ms-0 me-0">
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  value={9}
                  onClick={handleNumeroClick}
                >
                  9
                </button>
              </div>
            </div>

            <div className="col">
              <div className="row mt-3 ms-0 me-0">
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  onClick={handleOperadorClick}
                >
                  *
                </button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="row mt-3 ms-0 me-0">
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  value={4}
                  onClick={handleNumeroClick}
                >
                  4
                </button>
              </div>
            </div>

            <div className="col">
              <div className="row mt-3 ms-0 me-0">
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  value={5}
                  onClick={handleNumeroClick}
                >
                  5
                </button>
              </div>
            </div>

            <div className="col">
              <div className="row mt-3 ms-0 me-0">
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  value={6}
                  onClick={handleNumeroClick}
                >
                  6
                </button>
              </div>
            </div>

            <div className="col">
              <div className="row mt-3 ms-0 me-0">
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  onClick={handleOperadorClick}
                >
                  -
                </button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="row mt-3 ms-0 me-0">
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  value={1}
                  onClick={handleNumeroClick}
                >
                  1
                </button>
              </div>
            </div>

            <div className="col">
              <div className="row mt-3 ms-0 me-0">
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  value={2}
                  onClick={handleNumeroClick}
                >
                  2
                </button>
              </div>
            </div>

            <div className="col">
              <div className="row mt-3 ms-0 me-0">
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  value={3}
                  onClick={handleNumeroClick}
                >
                  3
                </button>
              </div>
            </div>

            <div className="col">
              <div className="row mt-3 ms-0 me-0">
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  onClick={handleOperadorClick}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col">
              <div className="row">
                <div className="col">
                  <div className="row ms-0 me-0">
                    <button
                      type="button"
                      className="btn btn-outline-dark"
                      value={0}
                      onClick={handleNumeroClick}
                    >
                      0
                    </button>
                  </div>
                </div>

                <div className="col">
                  <div className="row ms-0 me-0">
                    <button
                      type="button"
                      className="btn btn-outline-dark"
                      value={"."}
                      onClick={handleNumeroClick}
                    >
                      .
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="row ms-0 me-0">
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={handleResultado}
                >
                  =
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
