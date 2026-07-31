import classes from './NewPost.module.css';
import Modal from '../components/Modal';
import { Form, Link, redirect, useNavigate } from 'react-router-dom';

function NewPost(props) {

  const handleCancelNavigation = () => {
    navigate("..")
    }
  return (
    <Modal>
      <Form method="POST" className={classes.form}  >
      <p>
        <label htmlFor="body">Text</label>
          <textarea id="body" name='body' required rows={3} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
          <input type="text" id="name" name='author' required />
      </p>
      <p className={classes.actions}>
          <Link type='button' to="..">Cancel</Link>
        <button>Submit</button>
      </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  const response = fetch("http://localhost:8080/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(postData)
  });
  return redirect("/")
}