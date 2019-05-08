import React, { Component } from "react";
import "./App.css";
import "./Movie";
import Movie from "./Movie";

const movies = [
  {
    title: "inception",
    poster:
      "https://is1-ssl.mzstatic.com/image/thumb/Video4/v4/86/ac/14/86ac14f2-8c9b-2a5a-80be-49b8ee402228/pr_source.lsr/268x0w.png"
  },
  {
    title: "avatar",
    poster:
      "https://www.screengeek.net/wp-content/uploads/2018/11/avatar-movie.jpg"
  },
  {
    title: "avengers",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg"
  }
];

class App extends Component {
  state = {
    greeting: "Hello!"
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        greeting: "Hello again!"
      });
    }, 3000);
  }

  render() {
    const movie = movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />;
    });
    return (
      <div className="App">
        {movie}, {this.state.greeting}
      </div>
    );
  }
}

export default App;
