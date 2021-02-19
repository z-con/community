import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateNewPost from "./CreateNewPost"

const Posts = (props) => {
    console.log(props)
    let [posts, setPosts] = useState([])

    useEffect(() => {
        axios
            .get(`https://arcane-journey-00357.herokuapp.com/api/posts`)
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
                {posts && posts.slice(0).reverse().map(eachPost => 
                <div className="post">
                    <div>{eachPost.date}</div>
                    <br/>
                    
                    <div>{eachPost.content}</div>
                    <br/> <br/>

                    <div className="postOptions">
                        <div>(comments)</div>
                        <div className="votes">
                            <div>(up) </div>
                            <div>-</div>
                            <div>(down) </div>
                            <div>-</div>
                            <div>(x) </div>
                        </div>
                    </div>
                </div>
                    )}
        </div>
        </>
    );}
};

export default Posts;