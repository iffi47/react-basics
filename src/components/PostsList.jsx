
import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import classes from "./PostsList.module.css";
import { useEffect, useState } from "react";


export default function PostsList() {

  const posts = useLoaderData();
  const addPositionHandler = (postData) => {
    const response = fetch("http://localhost:8080/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
    });
    // setPostsList((prev)=> [postData,...prev]);
  }

  return (
    <>

      {<ul className={classes.posts}>
        {/* <Post chosenName={authorName} body={bodyValue} /> */}
        {posts.map((post) => (<Post chosenName={post.author} body={post.body} />))}
      </ul>}
    </>
  )
};

