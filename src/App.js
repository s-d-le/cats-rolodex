import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      count: 0,
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  searchMonsters = (searchTerm) => {
    this.setState({
      searchField: searchTerm,
    });
  };

  render() {
    const { searchField, monsters, count } = this.state;
    const filteredMonster = monsters.filter((monsters) =>
      monsters.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <header className="App-header">
          <h1>Monster Rolodex</h1>
          <SearchBox
            placeholder="Search Monsters"
            handleChange={(e) => this.searchMonsters(e.target.value)}
          />
          <CardList monsters={filteredMonster} />

          <button onClick={() => this.setState({ count: count + 1 })}>
            Increase {count}
          </button>
        </header>
      </div>
    );
  }
}

export default App;
