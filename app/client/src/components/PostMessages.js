import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../redux/index";

function PostMessages(props) {
  useEffect(() => {
    props.initGetPosts();
  }, []);
  return <div> post </div>;
}

const mapStateToProps = (state) => {
  return {
    data: state.PostMessage.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initGetPosts: () => dispatch(fetchPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostMessages);
