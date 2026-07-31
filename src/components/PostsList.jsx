
import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import classes from "./PostsList.module.css";


export default function PostsList() {

  const posts = useLoaderData();
  return (
    <>

      {<ul className={classes.posts}>
        {/* <Post chosenName={authorName} body={bodyValue} /> */}
        {posts.map((post) => (<Post key={post.id} id={post.id} chosenName={post.author} body={post.body} />))}
      </ul>}
    </>
  )
};


export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();
  return resData.posts
}

