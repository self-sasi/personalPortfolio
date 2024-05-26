import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me">
      <h1>About Me</h1>
      <p>I am a <b>Computer Science</b> student at the <b>University of Calgary</b>. Passionate about Software Engineering and Machine Learning, I love crafting sophisticated and intuitive solutions. </p>
      <p> When I'm not wrestling with algorithms or diving into code, you might find me at the gym, mastering mobile games, or developing applications in my spare time. 🎮🏋️‍♂️💡 </p> 
      <p> Feel free to explore my <a href="/projects" className="projects-link"><b>Projects</b></a>. 💻</p>
    </div>
  );
};

export default AboutMe;
