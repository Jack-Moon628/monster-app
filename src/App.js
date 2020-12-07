import React from 'react';
//import logo from './logo.svg';

import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state= {
      monsters: [],
      searchField: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = e => {
    this.setState(
      {
        searchField : e.target.value
      }
    )
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=> response.json())
    .then(users => this.setState({monsters : users}))
  }
  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter( monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return(
      <div className="App">
        <SearchBox
          placeholder = "search monsters"
          handleChange = {this.handleChange}
        />
        <CardList monsters = {filteredMonsters}/>
      </div>
    );
  }
}

export default App;
