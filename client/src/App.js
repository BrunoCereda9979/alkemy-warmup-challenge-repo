import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

// components
import PostsList from "./components/posts-list/posts-list.component";
import BlogPost from "./components/blog-post/blog-post.component";
import Button from "./components/button/button.component";

function App() {
  const [posts, setPosts] = useState([]);

  // on load get the posts from the api
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((posts) => {
      setPosts(posts.data);
    })
    .catch(err => console.log(err.message))
  }, []);

  return (
    <div className="App">
      <Button text="Button 1" color="white" background="red" />
      <PostsList>
        {
          posts.map((post) => {
            return(
              <BlogPost key={post.id} title={post.title} body={post.body}/>
            )
          })
        }
      </PostsList>
    </div>
  );
}

export default App;
