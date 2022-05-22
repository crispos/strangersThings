import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../api";


const NewPostMaker = () => {
    const navigate = useNavigate();
    const [newPost, setNewPost] = useState({
        title: "",
        description: "",
        price: "",
        location: "",
        willDeliver: false,
    });

    const sumbitHandler = async (event) => {
        event.preventDefault();
        try {
            const tempToken = localStorage.getItem("token")
             await createPost(newPost.title, newPost.description, newPost.price, newPost.location, newPost.willDeliver, tempToken)
            navigate("/");
        } catch (error) {
            console.error("Error adding your post:", error);
        }
    };

    const handlePostFieldChange = (property) => (event) => {
        let postUpdate = {
            title: newPost.title,
            description: newPost.description,
            price: newPost.price,
            location: newPost.location,
            willDeliver: newPost.willDeliver,
        }

        if (property === "willDeliver") {
            postUpdate[property] = event.target.checked
        } else {
            postUpdate[property] = event.target.value
        }

        setNewPost(postUpdate)
    };

    return (
        <>
            <h2 className="newPostHeader">Create Post</h2>
            <form id="formForNewPost" onSubmit={ sumbitHandler }>
            <input className="userinput"
                type="text"
                placeholder="Item..."
                onChange={handlePostFieldChange("title")}
                value={newPost.title}
            ></input>

            <input className="userinput"
                type="text"
                placeholder="Item Description..."
                onChange={handlePostFieldChange("description")}
                value={newPost.description}
            ></input>

            <input className="userinput"
                type="number"
                placeholder="Price"
                onChange={handlePostFieldChange("price")}
                value={newPost.price}
            ></input>

            <input className="userinput"
                type="text"
                placeholder="Location..."
                onChange={handlePostFieldChange("location")}
                value={newPost.location}
            ></input>

            <label>
                Can You Drop Off ?
                <input
                type="checkbox"
                onChange={handlePostFieldChange("willDeliver")}
                value={newPost.willDeliver}
                ></input>
            </label>

            <button>Add Post</button>
            </form>
        </>
    );
};

export default NewPostMaker;
