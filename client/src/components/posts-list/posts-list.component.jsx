import React from 'react';

// styles
import "./posts-list.styles.css";

const PostsList = (props) => {
    return(
        <div className="list">
            { props.children }
        </div>
    )
}

export default PostsList;