import logo from "./logo.svg";
import React from "react";
import CardList from "./components/card-list/cardList";
import SearchBox from "./components/search-box/searchBox";
import './App.css'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      search: ''
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  handleChange = (e) => {
    this.setState({ search: e.target.value })
  }
  render() {
    const { monsters, search } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(search.toLowerCase())
    )
    return (
      <section className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox handleChange={this.handleChange} placeholder="Search Monsters" />
        <CardList monsters={filteredMonsters} />
      </section>
    );
  }
}

export default App;
