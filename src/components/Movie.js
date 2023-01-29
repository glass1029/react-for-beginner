import PropTypes from "prop-types";

export default function Movie({mediumCoverImage, titleLong, summary, genres}) {
  return (
    <div>
      <img src={mediumCoverImage} alt={titleLong}/>
      <h2>{titleLong}</h2>
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
  mediumCoverImage: PropTypes.string.isRequired,
  titleLong: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}