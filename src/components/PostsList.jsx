
import Post from "./Post";
import classes from "./PostsList.module.css";
import { useEffect, useState } from "react";

const names =["gfdgdf","fdgdf"];

export default function PostsList() {

  const [postsList, setPostsList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const chosenName = Math.random() > 0.6 ? names[0] : names[1];
  useEffect(() =>{
     async function fetchPostsData(){
      setIsFetching(true);
      const response=await fetch("http://localhost:8080/posts");
      const resData= await response.json();
      setPostsList(resData.posts);
      setIsFetching(false);
    }
    fetchPostsData();
  },[])
  const addPositionHandler = (postData) => {
    const response =fetch("http://localhost:8080/posts",{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
    });
    // setPostsList((prev)=> [postData,...prev]);
  }

  return (
    <>

      { !isFetching ? <ul className={classes.posts}>
        {/* <Post chosenName={authorName} body={bodyValue} /> */}
       {postsList.map((post) =>(<Post chosenName={post.author} body={post.body} />)) }
      </ul> : "Loading"}
    </>
  )
}