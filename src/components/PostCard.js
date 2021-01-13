import React, { useState } from "react";
import "./PostCard.css";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

const PostCard = ({ image, likes, link, owner, publishDate, tags, text }) => {
  const [liked, setLiked] = useState(false);

  const likeHandler = () => {
    setLiked(!liked);
  };

  return (
    <section className="postCard">
      <div className="postHeader">
        <img
          className="userProfilePicture"
          src={owner.picture}
          alt={owner.email}
        />
        <p className="userName">
          {owner.firstName} {owner.lastName}
        </p>
      </div>
      <img className="userPostedImage" src={image} alt={text} />
      <div className="mediaStats">
        {liked ? (
          <FavoriteIcon className="likeButton" onClick={likeHandler} />
        ) : (
          <FavoriteBorderIcon className="likeButton" onClick={likeHandler} />
        )}
      </div>
    </section>
  );
};

export default PostCard;
