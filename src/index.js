import React, { Component } from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/searchBar";
import VideoList from "./components/videoList";
import VideoDetail from "./components/videoDetail";

const API_KEY = "AIzaSyCURo6vVzgYsI-mdZrX8G3u-104ygDNQPU";

class App extends Component {
  constructor(props) {
    super(props);

    console.log("Initializing state");
    this.state = {
      videos: [],
      selectedVideo: null
    };

    console.log("Searching YouTube");
    this.videoSearch("snowboarding");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      console.log("set videos: length = " + videos.length);
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
