import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

// components
import PostsList from "./components/posts-list/posts-list.component";
import BlogPost from "./components/blog-post/blog-post.component";
import Navbar from "./components/navbar/navbar.component";
import Form from "./components/form/form.component";
import Button from './components/button/button.component';

function App() {
  const [posts, setPosts] = useState([]);
  const [displayForm, setDisplayForm] = useState("none");

  // on load get the posts from the api
  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/posts')
    .then((posts) => {
      setPosts(posts.data.posts);
    })
    .catch(err => console.log(err.message))
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Button text="Add Post +" color="white" background="green" onAction={setDisplayForm}/>
      <Form title="Add a new post" display={displayForm}/>
      <PostsList>
        {
          posts.map((post) => {
            return(
              <BlogPost key={post.post_id} title={post.post_title} body={post.post_content}/>
            )
          })
        }
      </PostsList>
    </div>
  );
}

export default App;
