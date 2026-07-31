import PostsList from "./PostsList";
import classes from "./Post.module.css";
export default function Post({chosenName, body}) {
  // const chosenName= Math.random()>0.6 ? names[0]: names[1]
  return(
    <>
    <div className={classes.post}>
      <h1 className={classes.author}>{chosenName}</h1>
      <p className={classes.text}>{body}</p>
    </div>
    </>
  )
}