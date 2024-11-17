import axios from "axios";

export const fetchUserByUsername = async (username: string) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users?username=${username}`
  );
  return response.data;
};
