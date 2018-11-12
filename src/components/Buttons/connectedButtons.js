import { connect } from "react-redux";
import Buttons from "./buttons";

import { setCurrentIndex, setNsfw, increaseLikes, decreaseLikes } from "../../actions/humor";

const mapDispatchToProps = dispatch => {
  return {
    previous: id => dispatch(setCurrentIndex(id)),
    next: id => dispatch(setCurrentIndex(id)),
    nsfw: id => dispatch(setNsfw(id)),
    like: id => dispatch(increaseLikes(id)),
    dislike: id => dispatch(decreaseLikes(id))
  };
};

const mapStateToProps = ({ humor }) => {
  return {
    current: humor.current,
    image: humor.images[humor.current],
    images: humor.images,
    likes: humor.likes,
    dislikes: humor.dislikes
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buttons);
