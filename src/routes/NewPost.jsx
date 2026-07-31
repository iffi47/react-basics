import { useState } from 'react';
import classes from './NewPost.module.css';
import Modal from '../components/Modal';

function NewPost(props) {
     const[bodyValue, setBodyvalue] = useState("");
   const [authorName, setAuthorName] = useState("");

    const hanldeBodyChange = (event)=> {
      setBodyvalue(event.target.value)
    };
    const handleAuthorName = (event) => {
      setAuthorName(event.target.value)
    };
    function submitHandler (event) {
      event.preventDefault();
      const postData= {
        body: bodyValue,
        author: authorName
      }
      props.onAddPost(postData);
      props.onCancel();
    }
  return (
    <Modal>
    <form className={classes.form} onSubmit={submitHandler} >
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={hanldeBodyChange} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={handleAuthorName} />
      </p>
      <p className={classes.actions}>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
    </Modal>
  );
}

export default NewPost;