import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import { Provider } from "react-redux";
import { store } from "./store";
import Header from "./components/Header";
import Auth from "./components/Auth";
import PostList from "./components/PostList";
import PostDetails from "./components/PostDetails";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          {" "}
          <Route path="/" element={<PostList />} /> 
          <Route path="/auth" element={<Auth />} /> 
          <Route path="posts/:postId" element={<PostDetails />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
