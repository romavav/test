import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { logout } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Header.module.css";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleSignIn = () => {
    navigate("/auth");
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleTitleClick = () => {
    navigate("/"); 
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title} onClick={handleTitleClick}>
        Best Application
      </h1>
      <nav className={styles.nav}>
        {user ? (
          <button onClick={handleLogout} className={styles.navLink}>
            Log Out
          </button>
        ) : (
          <button onClick={handleSignIn} className={styles.navLink}>
            Sign In
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
