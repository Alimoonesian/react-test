import logo from "./logo.svg";
import "./App.css";
import React, { Comp, Component } from "react";
import { ListCards } from "./components/list-cards/list-cards.component";
import { FilterInput } from "./components/filter-input/filter-input.compnent";
class App extends Component {
  constructor() {
    super();

    this.state = {
      fieldInput: "",
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  onHandleChange = (e) => {
    this.setState({ fieldInput: e.target.value });
  };

  render() {
    const { fieldInput, monsters } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(fieldInput.toLowerCase())
    );

    return (
      <div>
        <FilterInput fieldInput={fieldInput} onHandleChange={this.onHandleChange} />
        <ListCards monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
