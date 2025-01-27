import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function NoteItem({id, title, createdAt, body}) {
  return (
      <article>
        <h3>
          <Link to={`/notes/${id}`}>{title}</Link>
        </h3>
        <p>{createdAt}</p>
        <p>{body}</p>
      </article>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteItem;