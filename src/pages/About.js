import React from 'react'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <section className="section about-section">
      <h1 className="section-title">About project</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque saepe rem eligendi? Sunt, voluptatem quod. Tempore, totam soluta iste, facilis perferendis unde alias sunt veniam tenetur, nostrum hic dolorem nemo eligendi eius.</p>
      <Link to="/" className="btn btn-primary">Return to home</Link>

    </section>
  )
}

export default About
