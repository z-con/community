import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateNewPost from "./CreateNewPost"

const Posts = (props) => {
    console.log(props)
    let [posts, setPosts] = useState([])

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/posts`)
            .then((res) => {
                setPosts(res.data)
                setPosts(posts => [...posts])
                
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    if (!localStorage.token) {
        return  <div>
                    <h1 className="loggedOut">Log in to join the conversation!</h1>
                    {/* <img src="../som_triangles.png" alt="School of Motion"/> */}
                </div>
    } else {
    return (
        <>
        <div>
        <CreateNewPost />
        </div>
        <br/><br/>
        <div className="posts">
                {posts && posts.map(eachPost => 
                <div className="post">
                    <div>{eachPost.date}</div>
                    <br/>
                    <div>{eachPost.content}</div>
                </div>
                    )}
        </div>
        </>
    );}
};

export default Posts;