import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch('https://yts.mx/api/v2/list_movies_json?minimum_rating=8.5&sort_by=year')
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <h1>The movies {movies.length > 0 ? `(${movies.length})` : null}</h1>
      <hr />
      {loading ? <h1>Loading...</h1> : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image}/>
              <h2>{movie.title_long}</h2>
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.map((genre) => (
                  <li key={genre}>{genre}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
 