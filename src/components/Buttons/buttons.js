import React from "react";
import PropTypes from "prop-types";
import sendToSlack from "../../utils/postToSlack";
import * as icon from "react-feather";
import "./buttons.css";

const Buttons = props => {
  const id = props.image && props.image.id;

  return (
    <main color="white" className="user-buttons relative justify-center flex items-center pa4">
      <icon.ThumbsUp
        className="like grow mr5"
        onClick={() => props.like(props.image.id)}
      />
  <h1 className="mh1" >{props.likes[id]}</h1>

   <icon.ThumbsDown  size={35}
        className="dislike grow mr1"
        onClick={() => props.dislike(props.image.id)}
      />
  <h1 className="mh1" >{props.dislikes[id]}</h1>
  

      <icon.AlertTriangle  size={35}
        className="nsfw grow link mh5"
        onClick={() => {
          props.nsfw(props.image.id);
          props.next(
            props.current === props.images.length - 1 ? 0 : props.current + 1
          );
        }}
      />
      <icon.ArrowLeft
        className="previous dim grow link mh5"
        onClick={() =>
          props.previous(
            props.current === 0 ? props.images.length - 1 : props.current - 1
          )
        }
      />
      <icon.ArrowRight
        className="next dim grow link mh5"
        onClick={() =>
          props.next(
            props.current === props.images.length - 1 ? 0 : props.current + 1
          )
        }
      />
      <div
        onClick={() => props.share(props.image)}
        className="share grow link w2 ml5"
      />
    </main>
    
    
  );
};

Buttons.defaultProps = {
  next: () => {},
  previous: () => {},
  like: () => {},
  dislike: ()=>{},
  nsfw: () => {},
  share: post => sendToSlack(post.title, post.url, post.id)
};

Buttons.propTypes = {
  next: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
  like: PropTypes.func.isRequired,
  dislike: PropTypes.func.isRequired,
  nsfw: PropTypes.func.isRequired,
  share: PropTypes.func.isRequired
};

export default Buttons;
