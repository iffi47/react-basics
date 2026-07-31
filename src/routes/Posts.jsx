import { Outlet } from "react-router-dom";
// import Post from "../components/Post";
// import PostsList from "../components/PostsList";
// import MainHeader from "../components/MainHeader";
// import { useState } from "react";

function Posts() {
//    const [modalState, setModalState]= useState(true);
//      const showModalHandler = () => {
//     setModalState(true);
//   };
//  const hideModalHandler = () => {
//     setModalState(false);
//   };
  
  return (
  <>
  <main>
    {/* <PostsList /> */}
    <Outlet/>
    </main>
  </>
  )
}

export default Posts;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();
  return resData.posts
}
