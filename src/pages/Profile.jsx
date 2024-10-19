import React from "react"
import "../App.css"

const ProfilePage = () => {
  return (
    <div className="profile">
      <div className="profile-grid">
        <div className="profile-top">
          <img
            src="https://via.placeholder.com/250"
            alt="Profile"
            className="profile-image"
          />
          <h1>John Doe</h1>
          <p className="lead">Software Engineer | Web Developer</p>
          <div className="icons">
            <a href="#" className="icon-link">
              GitHub
            </a>
            <a href="#" className="icon-link">
              LinkedIn
            </a>
            <a href="#" className="icon-link">
              Twitter
            </a>
          </div>
        </div>
        <div className="profile-about">
          <h2>About Me</h2>
          <p>
            I'm a passionate software engineer with experience in web
            development and a keen interest in technology.
          </p>
          <div className="skills">
            <span>JavaScript</span>
            <span>React</span>
            <span>Node.js</span>
          </div>
        </div>
        <div className="profile-exp">
          <h2>Experience</h2>
          <div>
            <h3>Company A</h3>
            <p>Software Developer (2020-2023)</p>
          </div>
        </div>
        <div className="profile-edu">
          <h2>Education</h2>
          <div>
            <h3>University of XYZ</h3>
            <p>Bachelor of Science in Computer Science (2016-2020)</p>
          </div>
        </div>
        <div className="profile-github">
          <h2>GitHub Repositories</h2>
          <div className="repo">
            <div>Repository 1</div>
            <div>Stars: 50</div>
          </div>
          <div className="repo">
            <div>Repository 2</div>
            <div>Stars: 30</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
