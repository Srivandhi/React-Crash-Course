import { useState, useEffect } from "react";

export const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())          // Converting response to JSON format
            .then((data) => setPosts(data))
            .catch((err) => {
                console.log(err);           // Catching and printing errors
            });
    }, []); // Empty dependency array to ensure the API call is made only once

    return (
        <div>
            <ul>
                {
                    posts.map((post) => {
                        return <li key={post.id}><h2>{post.title}</h2></li>;
                    })
                }
            </ul>
        </div>
    );
};
