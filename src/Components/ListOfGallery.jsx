import React from "react";
import Moment from "react-moment";

const ListOfGallery = ({
  id,
  created_at,
  updated_at,
  description,
  likes,
  links,
  urls,
  user,
}) => {
  return (
    <main>
      <figure>
        <img src={urls.thumb} alt={user.name} />
      </figure>
      <div className="block">
        <aside>
          <span className="iconBlock">
            <i className="fad fa-user"></i>
          </span>
          <span className="spanContent">{user.name}</span>
        </aside>
        <aside>
          <span className="iconBlock">
            <i className="far fa-thumbs-up"></i>
          </span>
          <span className="spanContent">{likes}</span>
        </aside>
      </div>
      <div className="contentDes">
        <p>
          <img src={user.profile_image.small} alt={user.name} />
        </p>
        <p>
          <Moment fromNow>{created_at}</Moment>{" "}
        </p>
      </div>
      <footer>
        <p>{description === null ? "" : description}</p>
        <p>
          <a href={links.download} target="_blank" rel="noreferrer">
            Download
          </a>
        </p>
      </footer>
    </main>
  );
};

export default ListOfGallery;
