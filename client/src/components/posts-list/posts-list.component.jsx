import React from 'react';

// styles
import "./posts-list.styles.css";

const PostsList = (props) => {
    return(
        <div className="list">
            <div className="post">
                <h1 className="post-title">I'm the post title</h1>
                <p className="post-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Ea corporis, architecto reprehenderit cumque odit laudantium nulla, 
                    consequatur consequuntur consectetur reiciendis sit possimus? Maiores, 
                    natus vel quas velit corrupti quibusdam explicabo!
                </p>
            </div>
            <div className="post">
                <h1 className="post-title">I'm the post title</h1>
                <p className="post-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Ea corporis, architecto reprehenderit cumque odit laudantium nulla, 
                    consequatur consequuntur consectetur reiciendis sit possimus? Maiores, 
                    natus vel quas velit corrupti quibusdam explicabo!
                </p>
            </div>
            <div className="post">
                <h1 className="post-title">I'm the post title</h1>
                <p className="post-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Ea corporis, architecto reprehenderit cumque odit laudantium nulla, 
                    consequatur consequuntur consectetur reiciendis sit possimus? Maiores, 
                    natus vel quas velit corrupti quibusdam explicabo!
                </p>
            </div>
        </div>
    )
}

export default PostsList;