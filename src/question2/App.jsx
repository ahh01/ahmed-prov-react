// 2. Visa lista med Posts (Inlägg) via API-Anrop (3p)
// Hämta post-data från https://jsonplaceholder.typicode.com/posts.
// Komponenten ska visa titlarna på de första 10 posts.
// Varje titel ska ha en knapp märkt "Visa detaljer".
// När denna knapp klickas på, ska inläggets body visas under sin titel.

import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPost() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data.slice(0, 10));
    }
    getPost();
  }, []);

  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <button className="bg-blue-300" 
            onclick={() => console.log(post.id)} > 
             {post.title}
            </button>
          </div>
          
        );
      })}
    </div>
  );
}

export default App;
