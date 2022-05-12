import React from "react";

class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      result: [],
      prevResult: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.calculate = this.calculate.bind(this);
    this.back = this.back.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    this.setState({ [name]: value });
  }

  calculate(event) {
    this.setState((prevState) => ({
      text: (eval(this.state.text) || "") + "",
      result: [...prevState.result, this.state.text + "   "],
      prevResult: [
        ...prevState.prevResult,
        +(eval(this.state.text) || "") + "  ",
      ],
    }));
  }
  back(event) {
    const { name, value, type, checked } = event.target;
    type === "abc"
      ? this.setState({ text: this.state.text.slice(0, -1) })
      : this.setState({ text: "" });
  }

  render() {
    return (
      <div className="card m-4 p-4">
        <div className="resultbar">
          <h1 className="text-center">
            <i class="bi bi-calculator"></i> Calculadora
          </h1>
          <hr />
        </div>

        <div className="history">
          <h2>
            <i class="bi bi-clock-history"></i> Historial
          </h2>
          <p>Operaciones: {this.state.result} </p>
          <p>Resultados: {this.state.prevResult} </p>
        </div>
        <hr />
        <input
          className="my-3 form-control border border-dark"
          name="text"
          autoFocus="autofocus"
          value={this.state.text}
          onChange={this.handleChange}
        />

        <div className="button mt-2 text-center">
          <button
            className="btn btn-outline-dark"
            name="text"
            value={this.state.text + "+"}
            onClick={this.handleChange}
          >
            +
          </button>

          <button
            className="btn btn-outline-dark"
            name="text"
            value={this.state.text + "-"}
            onClick={this.handleChange}
          >
            -
          </button>

          <button
            className="btn btn-outline-dark"
            type="adbc"
            name="text"
            value={this.state.text + "*"}
            onClick={this.handleChange}
          >
            *
          </button>

          <button
            className="btn btn-outline-dark"
            name="text"
            value={this.state.text + "/"}
            onClick={this.handleChange}
          >
            /
          </button>

          <button
            className="btn btn-outline-dark"
            name="text"
            value={this.state.text + "("}
            onClick={this.handleChange}
          >
            (
          </button>

          <button
            className="btn btn-outline-dark"
            name="text"
            value={this.state.text + ")"}
            onClick={this.handleChange}
          >
            )
          </button>
          <button
            className="btn btn-outline-dark"
            name="backspace"
            onClick={() =>
              this.setState({
                text: this.state.text.slice(0, -1),
              })
            }
          >
            {" "}
            Ce
          </button>
          <button
            className="btn btn-outline-dark"
            name="text"
            type="abc"
            onClick={this.back}
          >
            C
          </button>


          <button
            className="btn btn-outline-dark"
            name="text"
            value={this.state.text + "1"}
            onClick={this.handleChange}
          >
            1
          </button>

          <button
            className="btn btn-outline-dark"
            name="text"
            value={this.state.text + "2"}
            onClick={this.handleChange}
          >
            2
          </button>

          <button
            className="btn btn-outline-dark"
            name="text"
            value={this.state.text + "3"}
            onClick={this.handleChange}
          >
            3
          </button>

          <button
            className="btn btn-outline-dark"
            name="text"
            value={this.state.text + "4"}
            onClick={this.handleChange}
          >
            4
          </button>

          <button
            className="btn btn-outline-dark"
            name="text"
            value={this.state.text + "5"}
            onClick={this.handleChange}
          >
            5
          </button>

          <button
            className="btn btn-outline-dark"
            name="text"
            value={this.state.text + "6"}
            onClick={this.handleChange}
          >
            6
          </button>

          <button
            className="btn btn-outline-dark"
            name="text"
            value={this.state.text + "7"}
            onClick={this.handleChange}
          >
            7
          </button>
          <button
            className="btn btn-outline-dark"
            name="text"
            value={this.state.text + "8"}
            onClick={this.handleChange}
          >
            8
          </button>

          <button
            className="btn btn-outline-dark"
            name="text"
            value={this.state.text + "9"}
            onClick={this.handleChange}
          >
            9
          </button>


          <button
            className="btn btn-outline-dark"
            name="text"
            value={this.state.text + "."}
            onClick={this.handleChange}
          >
            .
          </button>
          <button
            className="btn btn-outline-dark"
            name="text"
            value={this.state.text + "0"}
            onClick={this.handleChange}
          >
            0
          </button>
          <button
            className="btn btn-dark"
            name="text"
            type="dbac"
            value={this.state.text}
            onClick={this.calculate}
          >
            =
          </button>
        </div>
      </div>
    );
  }
}
export default Layout;
