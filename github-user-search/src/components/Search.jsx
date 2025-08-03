import {useState} from "react";
import {fetchAdvancedUserData} from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setResults([]);

    try {
      const users = await fetchAdvancedUserData(username, location, minRepos);
      setResults(users);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow rounded mt-10">
      <form
        onSubmit={handleSearch}
        className="grid grid-cols-1 gap-4 sm:grid-cols-3"
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="px-3 py-2 border rounded w-full"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="px-3 py-2 border rounded w-full"
        />
        <input
          type="number"
          placeholder="Min Repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="px-3 py-2 border rounded w-full"
        />
        <button
          type="submit"
          className="sm:col-span-3 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      <div className="mt-6">
        {loading && <p className="text-blue-600">Loading...</p>}
        {error && (
          <p className="text-red-600">Looks like we cant find the user</p>
        )}

        {results.length > 0 && (
          <ul className="space-y-4 mt-4">
            {results.map((user) => (
              <li
                key={user.id}
                className="p-4 border rounded shadow-sm flex items-center gap-4"
              >
                <img
                  src={user.avatar_url}
                  alt="avatar"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h2 className="text-lg font-bold">{user.login}</h2>
                  <p className="text-sm text-gray-600">Score: {user.score}</p>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    View Profile
                  </a>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Search;
