
import './App.css';
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state.searchReults = [
      {name: "Tiny Dancer", artist: "Elton John", album: "Madman Across The Water"},
      {name: "Little Dancer", artist: " Tim McGraw", album: "Love Story"},
      {name: "Big Dancer", artist: "Rockabye", album: "Lullaby Rendictions of Elotn John"},
      {name: "Small Dancer", artist: "The White Raven", album: "Small but Big"},
      {name: "", artist: "", album: ""}
    ];
  }

  render() {
    return (
        <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            {/*<!-- Add a SearchBar component -->*/}
            <SearchBar />
            <div className="App-playlist">
              {/*<!-- Add a SearchResults component -->*/}
              <SearchResults />
              {/*<!-- Add a Playlist component -->*/}
              <Playlist />
            </div>
          </div>
        </div>
    );
  }
}

export default App;
