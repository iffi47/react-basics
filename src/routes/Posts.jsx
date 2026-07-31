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

