import './SearchResults.css'
import TrackList from "../TrackList/TrackList";

class SearchResults {
    render(trackList) {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList/>
            </div>
        );
    }
}

export default SearchResults;
