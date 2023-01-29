import { useEffect, useState } from "react";
import Movie from '../components/Movie'

export default function Home() {
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
          {movies.map((movie) => 
            <Movie 
              key={movie.id}
              id={movie.id}
              mediumCoverImage={movie.medium_cover_image}
              titleLong={movie.title_long}
              summary={movie.summary}
              genres={movie.genres} 
            />
          )}
        </div>
      )}
    </div>
  );
}