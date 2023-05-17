import React from 'react'
import "../styles/Resume.css";

function Resume() {
  const url ="https://profile.indeed.com/p/zehrad-5dbt85o"
  return (
    <div className="skills">
    <h1> Skills</h1>
    <ol className="list">
      <li className="item">
        <h2> Front-End</h2>
        <span>
          ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
          Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
        </span>
      </li>
      <li className="item">
        <h2>Back-End</h2>
        <span>
          NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
          MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
        </span>
      </li>
      <li className="item">
        <h2>Languages</h2>
        <span>JavaScript, Java, Python, C#, C, C++, TypeScript, Go</span>
      </li>
      <li className="item">
        <h2>Languages</h2>
        <span>JavaScript, Java, Python, C#, C, C++, TypeScript, Go</span>
      </li>
      <a href={url}>Resume</a>
    </ol>
    <br></br>
  </div>
  )
}

export default Resume