import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/authSlice";
import { fetchUserByUsername } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 
import styles from "../styles/Auth.module.css"; 

const Auth: React.FC = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const userData = await fetchUserByUsername(username);
    if (userData.length > 0) {
      dispatch(login(username));
      toast.success("Login successful!"); 
      navigate("/");
    } else {
      toast.error("User not found"); 
    }
  };

  return (
    <div className={styles.authContainer}>
      <form onSubmit={handleSubmit} className={styles.authForm}>
        <h2 className={styles.authTitle}>Sign In</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username Text Field"
          required
          className={styles.authInput}
        />
        <button type="submit" className={styles.authButton}>
          Send Button
        </button>
      </form>
      <ToastContainer /> 
    </div>
  );
};

export default Auth;
