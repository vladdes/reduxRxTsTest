import * as React from 'react';
import './App.css';

import logo from '../logo.svg';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

export default App;
