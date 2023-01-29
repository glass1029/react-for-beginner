import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

export default function Detail() {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState({});
  const { id } = useParams();
  const getMovie = async() => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setContent(json.data.movie);
    setLoading(false);
  }
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? <h1>loding...</h1> : (
        <div>
        <h1 style={{color: "orange"}}>{content.title_long}</h1>
        <hr />
          <img src={content.large_cover_image} alt={content.title} />
          <p>
            <b>Description</b><br />
            {content.description_full}
          </p>
          <p>
            <b>Last update</b><br />
            {content.date_uploaded}
          </p>
        </div>
      )}
    </div>
  )
};

