import PostsList from "./PostsList";
import classes from "./Post.module.css";
import { Link } from "react-router-dom";
export default function Post({ id, chosenName, body }) {
  // const chosenName= Math.random()>0.6 ? names[0]: names[1]
  return(
    <>
      <li className={classes.post}>
        <Link to={`/${id}/post_detail`}>
          <h1 className={classes.author}>{chosenName}</h1>
          <p className={classes.text}>{body}</p>
        </Link>
      </li>
    </>
  )
}