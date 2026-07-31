
import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import classes from "./PostsList.module.css";
import { useEffect, useState } from "react";


export default function PostsList() {

  const posts = useLoaderData();
  console.log(posts);
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
        {posts.map((post) => (<Post key={post.id} chosenName={post.author} body={post.body} />))}
      </ul>}
    </>
  )
};


export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();
  return resData.posts
}

