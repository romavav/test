import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "../styles/PostDetails.module.css"; 

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

const PostDetails: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<{ title: string; body: string } | null>(
    null
  );
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchPostData = async () => {
      const postResponse = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      setPost(postResponse.data);

      const commentsResponse = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      );
      setComments(commentsResponse.data);
    };

    fetchPostData();
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>; 
  }

  return (
    <div className={styles.postDetails}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <h2>Comments:</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>
              {comment.name} ({comment.email}):
            </strong>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostDetails;