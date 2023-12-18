import React, { Component } from "react";
import MovieCard from "./Moviecard";  

class MovieList extends Component {

  render() {
    const { movies,addStars,decStars,toggleFav,toggleCart } = this.props;
    console.log(this.props);
    return (
      <>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id} 
            movie={movie}
            addStars={addStars}
            decStars={decStars}
            toggleFav={toggleFav}
            toggleCart={toggleCart}
            />
        ))}
      </>
    );
  }
}

export default MovieList;


//<button className= {fav?"unfavourite-btn" :"favourite-btn" } onClick = {this.handleFav }></button> 