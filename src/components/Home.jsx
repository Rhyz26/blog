// src/components/BlogList.js
import React, { useState, useEffect } from "react";
import BlogPosts from "./BlogPosts";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("http://localhost:1337/api/blogs")
      .then((response) => response.json())
      .then((data) => {
        // Ensure data is an array
        if (Array.isArray(data.data)) {
          setBlogs(data.data);
        } else {
          console.error("Invalid data format:", data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {blogs.map((blog) => (
        <BlogPosts
          key={blog.id}
          blogTitle={blog.attributes.blogTitle}
          blogDesc={blog.attributes.blogDesc}
          blogContent={blog.attributes.blogContent}
          authorName={blog.attributes.authorName}
          coverImg={blog.attributes.coverImg}
          // coverImg={blog.attributes.coverImg?.data[0].attributes.formats.medium.url}
          // picture={blog.attributes.picture.formats.medium.url}
          // picture={blog.picture.data[0].attributes.formats.medium.urlAt}

          // .data.attributes.formats.small.url}
        />
      ))}
    </div>
  );
};

export default Home;
