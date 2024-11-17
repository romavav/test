import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/postsSlice";
import { RootState, AppDispatch } from "../store";
import { useNavigate } from "react-router-dom"; 
import styles from "../styles/PostList.module.css"; 

interface Post {
  id: number;
  title: string;
  body: string;
}

const PostList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts as Post[]);
  const navigate = useNavigate(); 

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleCardClick = (postId: number) => {
    navigate(`/posts/${postId}`); 
  };

  return (
    <div className={styles.postList}>
      {posts.map((post) => (
        <div
          key={post.id}
          className={styles.post}
          onClick={() => handleCardClick(post.id)}
        >
          <img
            src="https://via.placeholder.com/150"
            alt={post.title}
            className={styles.image}
          />
          <h2 className={styles.title}>{post.title}</h2>
          <p className={styles.description}>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
