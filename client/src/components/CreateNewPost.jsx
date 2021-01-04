import React from 'react';
import axios from 'axios';
import { useState } from "react";




const CreateNewPost = () => {
    const [post, setPost] = useState()

    var config = {
        method: 'post',
        url: 'http://localhost:5000/api/posts/',
        headers: { 
          'Content-Type': 'application/json', 
          'x-auth-token': localStorage.token
        },
        post: post
      };

    const handleChange = (event) => {
        setPost({
            ...post,
            [event.target.name]: event.target.value
        });
    }

    const submit = () => {
        axios
        .post("http://localhost:5000/api/posts/", post, config)
        .then(res => console.log(res, "New post created"))
        .catch(err => console.log(err, "We've hit an error"))
        window.location.reload();
    }




    return (
        <div className="createNewPostContainer">
            <h1>Create a new discussion topic!</h1>
            <textarea className="createNewPostText" onChange={handleChange} type="text" name="content" required/>
            <button className="createNewPostButton" onClick={submit}>Publish</button>
        </div>
    );
};

export default CreateNewPost;
