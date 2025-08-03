import axios from "axios";

const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

const githubAPI = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: token ? `Bearer ${token}` : undefined,
  },
});

export const fetchUserData = async (username) => {
  const response = await githubAPI.get(`/users/${username}`);
  return response.data;
};
