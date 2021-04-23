import React from 'react';

// styles
import "./form.styles.css";

const Form = (props) => {
    return(
        <form style={{display: 'none'}}>
            <h2>{ props.title }</h2>
            <div className="input-container">
                <input type="text" name="postTitle" id="postTitle" placeholder="Post Title..."/>
                <textarea name="postDescription" id="postDescription" cols="30px" rows="10" value="Post Description..."></textarea>
            </div>
        </form>
    )
}

export default Form;