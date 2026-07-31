import { useState } from 'react';
import classes from './NewPost.module.css';
import Modal from '../components/Modal';
import { Link, useNavigate } from 'react-router-dom';

function NewPost(props) {
     const[bodyValue, setBodyvalue] = useState("");
  const [authorName, setAuthorName] = useState("");
  const navigate = useNavigate();
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
  };
  const handleCancelNavigation = () => {
    navigate("..")
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
          <Link type='button' onClick={handleCancelNavigation}>Cancel</Link>
        <button>Submit</button>
      </p>
    </form>
    </Modal>
  );
}

export default NewPost;