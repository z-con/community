import React, { useState, useEffect } from "react";
import axios from "axios";

const Posts = (props) => {
    console.log(props)
    let [post, setPost] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/api/posts`)
            .then((res) => {
                setPost(res.data)
                console.log(post)
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    return (
        <div className="posts">
                {post && post.map(eachPost => 
                <box className="post">
                    <li>{eachPost.content}</li>
                </box>
                    )}
        </div>
    );
};

export default Posts;