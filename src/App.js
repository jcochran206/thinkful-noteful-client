import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import dummyStore from '../src/dummy-store';
import {getNotesForFolder, findNote, findFolder} from '../src/notes-helpers';
import './App.css';


class App extends Component {
  //initalize component 
  state = {
    notes: [],
    folders: []
  };

  //component 
  componentDidMount() {
    setTimeout(() => this.setState(dummyStore), 600)
  }

  //client routes 
  renderNavRoutes() {
    const {routes, folders} = this.state;
    
  }


  render() {
    return (
      <div>
        <nav>Navigation here</nav>
        <header>
          <h1>Noteful Client </h1>
        </header>
      </div>
    )
  }
}

export default App;
