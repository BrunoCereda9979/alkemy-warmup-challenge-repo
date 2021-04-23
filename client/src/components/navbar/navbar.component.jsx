import React from 'react';

// styles
import "./navbar.styles.css";

// components
import Button from "../button/button.component";

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>Blogify</h1>
            <Button text="Add Post +" color="white" background="green"/>
        </div>
    )
}

export default Navbar;