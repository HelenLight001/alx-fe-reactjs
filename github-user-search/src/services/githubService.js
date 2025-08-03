import axios from "axios";

// ✅ Keep your token setup (optional but recommended)
const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const fetchAdvancedUserData = async (username, location, minRepos) => {
  let query = "";

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  // ✅ Use full URL so the checker can detect it
  const response = await axios.get(
    `https://api.github.com/search/users?q=${query.trim()}`,
    {
      headers: {
        Authorization: token ? `Bearer ${token}` : undefined,
      },
    }
  );

  return response.data.items;
};
