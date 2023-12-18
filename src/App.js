
import React from 'react';
import MovieList from "./MovieList";
import Navbar from  "./Navbar1"; 
import {movies} from "./moviesdata"
import "./index.css";
class App extends React.Component  {
  constructor() {
    super();
    this.state = {
        movies : movies,
        cartCount:0
    };
  }

  handleIncStar = (movie) => {
    const {movies} = this.state
  const movieIndex = movies.findIndex((m) => m.title === movie.title);
  if (movieIndex !== -1) {
    if (movies[movieIndex].stars < 5) {
      movies[movieIndex].stars += 0.5;

      this.setState({
        movies: [...movies],
      });
    }
  }

  };
  

  handleDecStars = (movie) => {
    const updatedMovies = this.state.movies.map((m) => {
      if (m.title === movie.title && m.stars > 0) {
        return { ...m, stars: m.stars - 0.5 };
      }
      return m;
    });

    this.setState({
      movies: updatedMovies,
    });
  };

handleToggleFav = (movie) =>{
    const {movies} = this.state;   
    const mid = movies.indexOf(movie);
    movies[mid].fav =!movies[mid].fav;
    this.setState({
        movies
    })
}


handleToggleCart = (movie) => {
  let { movies ,cartCount} = this.state; 
  const mid = movies.indexOf(movie);
  movies[mid].isInCart = !movies[mid].isInCart;
  console.log( movies[mid].isInCart)

  if( movies[mid].isInCart){
    cartCount = cartCount+=1
  }
  else{
    cartCount -= 1;
  }
  this.setState({
    movies,
    cartCount
})
console.log(cartCount)
};


render() {
  const { movies, cartCount } = this.state;

  return (
    <>
   <Navbar cartCount={cartCount} />
      <MovieList
        movies={movies}
        addStars={this.handleIncStar}
        decStars={this.handleDecStars}
        toggleFav={this.handleToggleFav}
        toggleCart={this.handleToggleCart}
      />
    </>
  );
}
}

export default App;

 



