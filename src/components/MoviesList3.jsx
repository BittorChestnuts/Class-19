import { useState } from 'react';

// import the array of movie objects
import moviesData from '../movies-data.json';
import MovieCard from './MovieCard';


function MovieList3() {
    // Declare a state variable "movies"
    // and set the array from movies-data.json as the initial state
    const [movies, setMovies] = useState(moviesData);

 const deleteMovie = (movieID) => {
        const filteredMovies = movies.filter((eachMovie) => {
            return eachMovie._id !== movieID;
        })
        console.log(filteredMovies);
        setMovies(filteredMovies);
    } 

    return (
        <div>
            <h1>Movie List</h1>
            {movies.map(movie => {
                return <MovieCard key={movie._id} movie={movie} deleteMovie={deleteMovie} />;
            })}
        </div>
    );
}

export default MovieList3;