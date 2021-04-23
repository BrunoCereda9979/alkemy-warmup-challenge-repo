import React from 'react';

// styles
import "./form.styles.css";

const Form = (props) => {
    return(
        <form style={{display: `${props.display}`}}>
            <h2>{ props.title }</h2>
            <div className="input-container">
                <input type="text" name="postTitle" id="postTitle" placeholder="Post Title..."/>
                <textarea name="postDescription" id="postDescription" cols="30px" rows="10" value="Post Description..."></textarea>
                <input type="submit" value="Send" id="submitButton"/>
            </div>
        </form>
    )
}

export default Form;