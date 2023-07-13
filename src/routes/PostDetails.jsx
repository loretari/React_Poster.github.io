import {useLoaderData, Link, Form, redirect } from "react-router-dom";

import Modal from '../components/Modal';
import classes from './PostDetails.module.css';

function PostDetails() {
   const post = useLoaderData();

    if (!post) {
        return (
            <Modal>
                <main className= {classes.details}>
                    <h1>Could not find post</h1>
                    <p>Unfortunately, the requested post could not be found.</p>
                    <p>
                        <Link to= '..' className={classes.btn}>
                            Okay
                        </Link>
                    </p>
                </main>
            </Modal>
        );
    }

    return (
        <Modal>
            <main className={classes.details}>
                <p className={classes.author}>{post.author}</p>
                <p className={classes.text}>{post.body}</p>
                <Form method='delete' replace>
                    <button type= 'submit'>Delete</button>
                </Form>
            </main>
        </Modal>
    )



}

export default PostDetails;

export async function loader({params}) {
 const response =await fetch('http://localhost:8080/posts/' + params.id);
 const resData = await response.json();
 return resData.post;
}

export async function action({ params }) {
  const response = await fetch('http://localhost:8080/posts/${params.id}', {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json',
      },
  });
  if (response.status === 204) {
      console.log('Post was deleted');
  };

  return redirect('/');
}

