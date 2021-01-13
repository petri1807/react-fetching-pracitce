import React, { useState, useEffect } from "react";

import "./App.css";

import PostCard from "./components/PostCard";

// The point here was to simply create a React project with create-react-app and have it:
// 1. Fetch dummy data from a public API
// 2. Store the data in a hook
// 3. Display the results on page

const BASE_URL = "https://dummyapi.io/data/api";
const APP_ID = "5ffdda324eab5e261757db46"; // ID for the API so we can make requests

const App = () => {
  const [postList, setPostList] = useState([]);

  // Practicing different ways of fetching data from an API
  useEffect(() => {
    // // Way 1. Promise chaining with fetch API
    const fetchPosts = () => {
      fetch(`${BASE_URL}/post?limit=10`, {
        headers: { "app-id": APP_ID },
      })
        .then((response) => response.json())
        .then((response) => setPostList(response.data));
    };

    fetchPosts();

    // Way 2. Async await
    // const asyncFetch = async () => {
    //   const request = await fetch(`${BASE_URL}/post?limit=15`, {
    //     headers: { "app-id": APP_ID },
    //   })
    //     .then((response) => response.json())
    //     .then((response) => setPostList(response.data));

    //   return request;
    // };

    // asyncFetch();

    // Way 3: Axios API
  }, []);

  // Logs whenever postList is updated
  useEffect(() => {
    // using array.length as the if-statement condition since a length of 0 is a 'falsy' value, and we don't want to log an empty array
    if (postList.length) console.log("Posts", postList);
  }, [postList]);

  return (
    <div className="postCardContainer">
      {postList.map((post) => (
        <PostCard
          key={post.id}
          image={post.image}
          likes={post.likes}
          link={post.link}
          owner={post.owner}
          publishDate={post.publishDate}
          tags={post.tags}
          text={post.text}
        />
      ))}
    </div>
  );
};

export default App;
