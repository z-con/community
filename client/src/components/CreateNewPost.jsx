import React from 'react';
import Axios from 'axios';
import { useState } from "react";


const CreateNewPost = () => {
    const [post, setPost] = useState({
        title: ""
    })
    function handleChange(event) {
        setPost({
            ...post,
             [event.target.name]: event.target.value });
    }

    const submit = () => {
        Axios.post("http://localhost:5000/posts", post)
        .then(res => console.log(res, "New post created"))
        .catch(err => console.log(err, "We've hit an error"))
    }

    return (
        <div>
            <input type="text" name="body" placeholder="body" value={post.content} onChange={handleChange} />
            <button onClick={submit}>Publish</button>
        </div>
    );
};

export default CreateNewPost;
