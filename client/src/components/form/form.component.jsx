import { React, useState } from 'react';
import axios from 'axios';

// styles
import "./form.styles.css";

const Form = (props) => {
    const [postTitle, setPostTitle] = useState("");
    const [postDescription, setPostDescription] = useState("");

    // post a new blog post
    const addNewPost = (e) =>{
        e.preventDefault();

        axios.post('http://localhost:3000/api/v1/posts', {
            postTitle: postTitle,
            postDescription: postDescription,
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return(
        <form onSubmit={e => addNewPost(e)} style={{display: `${props.display}`}}>
            <h2>{ props.title }</h2>
            <div className="input-container">
                <input onChange={(e) => setPostTitle(e.target.value)} type="text" name="postTitle" id="postTitle" placeholder="Post Title..."/>
                <textarea onChange={(e) => setPostDescription(e.target.value)} name="postDescription" id="postDescription" cols="30px" rows="10"></textarea>
                <input type="submit" value="Send" id="submitButton"/>
            </div>
        </form>
    )
}

export default Form;