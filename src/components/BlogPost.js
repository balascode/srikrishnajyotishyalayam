import React from 'react';
import '../assets/css/main.css';

const BlogPost = ({ match }) => {
  // Use match.params.id to fetch and display blog post details
  return (
    <div className="content">
      <section className="section">
        <h1>Blog Post</h1>
        {/* Display detailed content of the blog post */}
      </section>
    </div>
  );
};

export default BlogPost;
