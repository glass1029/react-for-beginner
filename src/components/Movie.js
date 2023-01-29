import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Movie({id, mediumCoverImage, titleLong, summary, genres}) {
  return (
    <div>
      <img src={mediumCoverImage} alt={titleLong}/>
      <h2>
        <Link to={`/movie/${id}`}>{titleLong}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  mediumCoverImage: PropTypes.string.isRequired,
  titleLong: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}