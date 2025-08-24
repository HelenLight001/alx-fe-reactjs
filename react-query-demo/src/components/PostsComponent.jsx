import { useQuery } from '@tanstack/react-query'

async function fetchPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) throw new Error("Network response was not ok")
  return res.json()
}

export default function PostsComponent() {
  const { data, error, isLoading, isError, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts
  })

  if (isLoading) return <p>Loading posts...</p>
  if (isError) return <p>Error: {error.message}</p>

  return (
    <div>
      <button 
        onClick={() => refetch()} 
        style={{ marginBottom: "10px", padding: "8px", cursor: "pointer" }}
      >
        Refetch Posts
      </button>
      <ul>
        <li>{data.slice(0, 10).map(post => (
          <li key={post.id}><strong>{post.title}</strong></li>
        ))}</li>
        {data.slice(0, 10).map(post => (
          <li key={post.id}><strong>{post.body}</strong></li>
        ))}
      </ul>
    </div>
  )
}
