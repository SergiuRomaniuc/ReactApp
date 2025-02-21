
import './App.css';
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {id: 1, name: "Tiny Dancer", artist: "Elton John", album: "Madman Across The Water"},
        {id: 2, name: "Little Dancer", artist: " Tim McGraw", album: "Love Story"},
        {id: 3, name: "Big Dancer", artist: "Rockabye", album: "Lullaby Rendictions of Elotn John"},
        {id: 4, name: "Small Dancer", artist: "The White Raven", album: "Small but Big"},
        {id: 5, name: "", artist: "", album: ""}
      ]
    };
  }

  render() {
    return (
        <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            {/*<!-- Add a SearchBar component -->*/}
            <SearchBar />
            <div className="App-playlist">
              <SearchResults searchResults={this.state.searchResults}/>
              <Playlist />
            </div>
          </div>
        </div>
    );
  }
}

export default App;
