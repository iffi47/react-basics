import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Posts from './routes/Posts'
import PostsList, { loader as postsLoader } from './components/PostsList';
import RootLayout from './routes/RootLayout';
import NewPost, { action as newPostAction } from './routes/NewPost';


const router = createBrowserRouter([
  {
    patH: "/", element: <RootLayout />,
    children: [
      {
        path: "/", element: <Posts />,
        children: [
          { path: "/posts", element: <PostsList />, loader: postsLoader, },
          { path: "/new_post", element: <NewPost />, action: newPostAction }
        ]
      },
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
