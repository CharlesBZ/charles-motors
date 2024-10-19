import React from "react"
import "../App.css"

const PostPage = () => {
  return (
    <div className="post-page">
      <div className="post-form">
        <div className="post-form-header">
          <h1>Create a New Post</h1>
        </div>
        <form>
          <textarea rows="4" placeholder="Write something..."></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="posts">
        <div className="post">
          <div>
            <img src="https://via.placeholder.com/100" alt="User" />
          </div>
          <div>
            <h3>John Doe</h3>
            <p>
              This is a sample post. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Integer nec odio.
            </p>
            <div className="comment-count">Comments: 5</div>
            <div className="post-date">Posted on October 1, 2024</div>
          </div>
        </div>
        {/* Repeat more post components as needed */}
      </div>
    </div>
  )
}

export default PostPage
