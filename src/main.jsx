import React from 'react'
import ReactDOM from 'react-dom/client'
import Posts from './routes/Posts'
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostsList from './components/PostsList';
import RootLayout from './routes/RootLayout';
import NewPost from './routes/NewPost';


const router=createBrowserRouter([
    {patH: "/", element: <RootLayout/>,
      children:[
        {path: "/", element: <Posts/>, children:[
          {path: "/posts", element: <PostsList/>},
        {path: "/new_post", element:<NewPost/>}
        ]},
      ]
    },
    
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
