import axios from "axios";

const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

const githubAPI = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: token ? `Bearer ${token}` : undefined,
  },
});

// Basic search (already defined in earlier task)
// export const fetchUserData = async (username) => {
//   const response = await githubAPI.get(`/users/${username}`);
//   return response.data;
// };

// 🔁 Advanced search function:
export const fetchAdvancedUserData = async (username, location, minRepos) => {
  let query = "";

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await githubAPI.get(`/search/users?q=${query.trim()}`);
  return response.data.items;
};
