// src/components/MovieCard.jsx
import './movieCard.css'

function MovieCard(props) {
    const { movie } = props;
  
    return (
      <div className="MovieCard">
        <h3>Title: {movie.title}</h3>
        <p>Director: {movie.director}</p>
        <p>Rating: {movie.IMDBRating}</p>
        <p>{movie.hasOscars ? "🏆" : "🚫"}</p>
        <button onClick={() => props.deleteMovie(movie._id)} className="btn-delete">
        Delete </button>
    </div>
    );
  }
  
  export default MovieCard;