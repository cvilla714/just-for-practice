import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { fecthPosts } from './utils/fetchPost'

function App() {
  const [count, setCount] = useState(0);
  const [loading , setLoading] = useState(true);
  const [posts , setPosts] = useState<Post[]>([]);
  const [error , setError] = useState<string | null>(null); 

  useEffect(() => {
    const loadData = async () =>{
      try{
        const data = await fecthPosts();
        setPosts(data);
      }catch(err){
        setError(err instanceof Error ? err.message: 'Failed to load posts');
      }finally{
        setLoading(false);
      }
    };
    loadData();
  },[]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;



  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      ))}
    </div>
    </>
  )
}

export default App
