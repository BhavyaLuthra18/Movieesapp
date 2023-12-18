

function MovieCard(props){


    const { movie, addStars, decStars,toggleCart, toggleFav } = props;
    const { title, plot, price, rating, stars, fav,isInCart, poster } = props.movie;

    const imageUrl = "https://example.com/default-poster-image.jpg"; // Replace with your poster URL

    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img alt="poster" src={poster || imageUrl} />
          </div>
          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">Rs.{price}</div>
            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img
                  alt="decrease"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828899.png"
                  className="str-btn"
                  onClick={() => {
                    decStars(movie);
                  }}
                />
                <img
                  alt="star"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                  className="stars"
                />
                <img
                  alt="increase"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828919.png"
                  className="str-btn"
                  onClick={() => {
                    addStars(movie);
                  }}
                />
                <span>{stars}</span>
              </div>
              <button
                className={fav ? "unfavourite-btn" : "favourite-btn"}
                onClick={() => {
                  toggleFav(movie);
                }}
              >
                {fav ? "Un-favourite" : "Favourite"}
              </button>
              <button
                className={isInCart ? "unfavourite-btn" : "cart-btn"}
                onClick={() => {
                  toggleCart(movie);
                }}
              >
                {isInCart ? "Remove from Cart" : "Add to Cart"}
              </button>

            </div>
          </div>
        </div>
      </div>
    );
 
}

export default MovieCard;


//<button className= {fav?"unfavourite-btn" :"favourite-btn" } onClick = {this.handleFav }></button>  

