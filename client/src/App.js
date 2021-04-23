import { useEffect, useState } from 'react';
import './App.css';


// components
import PostsList from "./components/posts-list/posts-list.component";
import BlogPost from "./components/blog-post/blog-post.component";

function App() {
  return (
    <div className="App">
      <PostsList>
        <BlogPost title="This is a blog title" body="This is a body for the blog post"/>
        <BlogPost title="This is a blog title" body="This is a body for the blog post"/>
        <BlogPost title="This is a blog title" body="This is a body for the blog post"/>
      </PostsList>
    </div>
  );
}

export default App;
