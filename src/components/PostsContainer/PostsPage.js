//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post.js";
import "./Posts.css";
import dummyData from "../../dummy-data.js";
// import data 

const PostsPage = props => {
  // set up state for your data
  const [postData] = useState(dummyData);
  console.log(postData);
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {postData.map((item, index) => (<Post post={item} key={index}/>))}
    </div>
  );
};

export default PostsPage;