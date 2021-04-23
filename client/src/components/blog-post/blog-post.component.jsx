import React from 'react';

// styles
import "./blog-post.styles.css";

const BlogPost = (props) => {
    return (
        <div className="post">
            <h1 className="post-title">{ props.title }</h1>
        </div>
    )
}

export default BlogPost;