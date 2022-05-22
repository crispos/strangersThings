import React, { useEffect, useState } from "react";
import { fetchAllPost, deletePost } from "../api";

const Post = () => {
    const [posts, setPosts] = useState([])
    const username = localStorage.getItem("username")

    useEffect(() => {
        async function refreshPosts() {
            const posts = await fetchAllPost()

            setPosts(posts)
        }

        refreshPosts()
    }, [])

    async function handleDeleteButtonClick(id) {
        const token = localStorage.getItem("token")
        const isDeleteSuccessful = await deletePost(id, token)

        if (isDeleteSuccessful) {
            const remainingPosts = posts.filter((post) => post._id !== id);
            setPosts(remainingPosts);
        }
    }

    return (
        <>
            <div id="postsNavBar">
                <h2 className="page-title">Sale Items</h2>
            </div>
                { posts.length ? 
                    (
                        posts.map((post) => (
                            <div
                                className="information"
                                key={post._id}
                                style={{ border: "2px solid black" }}
                            >
                                <div id="itemContainer">
                                    <span className="postName">{post.title}</span>
                                </div>

                                <div id="user">User: {post.author.username}</div>
                                <div className="location"> My Location: {post.location}</div>
                                <div className="description">Description: {post.description}</div>
                                <div className="price">Price: {post.price}</div>
                                
                                { post.author.username === username ? 
                                    (   
                                    <div className="delete">
                                        <button onClick={() => handleDeleteButtonClick(post._id)}>
                                            Delete 
                                        </button>
                                    </div>
                                    ) : null
                                }
                            </div>
                        ))
                    ) : (
                        <div>
                            <h2>Loading...</h2>
                        </div>
                    )}
        </>
    )
}
export default Post;